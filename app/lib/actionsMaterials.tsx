'use server'

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// import { signIn } from 'next-auth/react';
import { AuthError } from 'next-auth';

export type State = {
    errors?: {
        name?: string[];
        description?: string[];
    };
    message?: string | null; 
}

const MaterialFormSchema = z.object({
    id: z.number(),
    name: z.string({
        invalid_type_error: 'Por favor ingrese un nombre de tipo de material',
    }),
    materialtypeid: z.string({
        invalid_type_error: 'Por favor ingrese un nombre de tipo de material',
    }),
    size: z.string({
        invalid_type_error: 'Por favor ingrese el tamaño del material',
    }),
    color: z.string({
        invalid_type_error: 'Por favor ingrese el color del material',
    }),
    description: z.string(),
});

const CreateMaterial = MaterialFormSchema.omit({id: true});
const UpdateMaterial = MaterialFormSchema.omit({id: true});

export async function createMaterial(preState: State, formData: FormData) {
    const validateFields = CreateMaterial.safeParse({
        name: formData.get('name'),
        materialtypeid: formData.get('materialtypeid'),
        size: formData.get('size'),
        color: formData.get('color'),
        description: formData.get('description'),
    });

    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
            message: 'Campos faltantes, por favor revise',
        };
    }

    const { name, materialtypeid, size, color, description } = validateFields.data;

    try {
        await sql `insert into materials (name, materialtypeid, size, color, description)
        VALUES (${name}, ${materialtypeid}, ${size}, ${color}, ${description});`
    } catch (error) {
        return {
            message: 'Database Error: Failed to create material',
        }
    }

    revalidatePath('/dashboard/materials');
    redirect('/dashboard/materials');
}

export async function updateMaterial(
    materialid: number, 
    preState: State, 
    formData: FormData) {

    const validateFields = UpdateMaterial.safeParse({
        materialid:formData.get('id'),
        name: formData.get('name'),
        materialtypeid: formData.get('materialtypeid'),
        size: formData.get('size'),
        color: formData.get('color'),
        description: formData.get('description'),
    });

    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
            message: 'Missing fields, Failed to update material'
        };
    }

    const { name, materialtypeid, size, color, description } = validateFields.data;

    try {
        console.log('try to update in DB');
        await sql `Update materials
        SET name = ${name},
        materialtypeid = ${materialtypeid},
        size = ${size},
        color = ${color},
        description = ${description}
        WHERE id = ${materialid}`;
        console.log('update success in DB');
    } catch (error) {
        return { message: 'Database Error: Failed to Update the Material Type' };
    }

    revalidatePath('/dashboard/materials');
    redirect('/dashboard/materials');
}

export async function deletematerial(id:number) {
    await sql `DELETE FROM materials WHERE id = ${id}`;
    revalidatePath('/dashboard/materials');
}