import { lusitana } from "@/app/ui/fonts";
import { Metadata } from "next";
import { CreateMaterialType } from "@/app/ui/materialtype/buttons";
import Form from "@/app/ui/materialtype/create-form";
import { fetchMaterialTypes } from "@/app/lib/data";

export const metadata: Metadata = {
    title: "MaterialsType"
}

export default function Page() {
    const materialType = fetchMaterialTypes();
    return (
        <main>
            <Form materialType={materialType} />
        </main>
    )
}