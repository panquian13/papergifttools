import { lusitana } from "@/app/ui/fonts";
import { Metadata } from "next";
import { CreateMaterial } from "@/app/ui/materials/buttons";
import Form from "@/app/ui/materials/create-form";
import { fetchMaterialTypes } from "@/app/lib/data";

export const metadata: Metadata = {
    title: "Materiales"
}

export default async function Page() {
    const materials = await fetchMaterialTypes();

    return (
        <main>
            <Form materialtypes={materials} />
        </main>
    )
}
