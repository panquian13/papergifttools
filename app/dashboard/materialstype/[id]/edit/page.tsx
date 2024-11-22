import Form from "@/app/ui/materialtype/edit-form";
import Breadcrumbs from "@/app/ui/materialtype/breadcrums";
import { fetchMateryalTypeById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Edit Material Type'
};

export default async function Page({ params }: { params: {id: string }}) {
    const id = params.id;
    const [ materialtype ] = await Promise.all([
        fetchMateryalTypeById(id),
    ]);

    if (!materialtype) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Tipo de Material', href: '/dashboard/materialtype' },
                    {
                        label: 'Editar Tipo de Material',
                        href: '/dashboard/materialtype/${id}/edit',
                        active: true
                    },
                ]}
            />
            <Form materialType={ materialtype } />
        </main>
    )
}