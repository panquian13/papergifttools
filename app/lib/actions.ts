'use server'

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { signIn } from 'next-auth/react';
import { AuthError } from 'next-auth';

export type State = {
    errors?:{
        name?: string[];
        description?: string[];
    };
    message?: string | null;
}

const MaterialTypeFormSchema = z.object({
    id: z.string(),
    name: z.string({
        invalid_type_error: 'Por favor ingrese un nombre de tipo de material',
    }),
    description: z.string(),
});

const CreateMaterialType = MaterialTypeFormSchema.omit({id: true});
const UpdateMaterialType = MaterialTypeFormSchema.omit({id: true});

export async function createMaterialType(prevState: State, formData: FormData) {
    const validateFields = CreateMaterialType.safeParse({
        name: formData.get('name'),
        description: formData.get('description'),
    });

    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
            message: 'Missing Fields, Failed to create new material',
        };
    }

    const { name, description } = validateFields.data;

    try {
        await sql `INSERT INTO MaterialType (Name, Description)
        VALUES (${name}, ${description});`
    } catch (error) {
        return {
            message:  'Database Error: Failed to create a new Material Type',
        }
    }

    revalidatePath('/dashboard/materialstype');
    redirect('/dashboard/materialstype');
    
}

export async function updateMaterialType(
    materialtypeid: number,
    prevState: State,
    formData: FormData) {

    const validateFields = UpdateMaterialType.safeParse({
        materialtypeid: formData.get('materialtypeid'),
        name: formData.get('name'),
        description: formData.get('description'),
    });

    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
            message: 'Missing Fields, Failed to update Material Type',
        }
    }

    const { name, description } = validateFields.data;

    try {
        await sql `
            UPDATE materialtype 
            SET name = ${name}, description = ${description}
            WHERE materialtypeid = ${materialtypeid}
        `;
    } catch (error) {
        return { message: 'Database Error: Failed to Update the Material Type' };
    }

    revalidatePath('/dashboard/materialstype');
    redirect('/dashboard/materialstype');
}

export async function deleteMaterialType(id:number) {
    await sql `DELETE FROM materialtype WHERE materialtypeid = ${id}`;
    revalidatePath('/dashboard/materialstype');
    
}   