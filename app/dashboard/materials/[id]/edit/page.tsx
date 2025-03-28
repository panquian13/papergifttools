import Form from '@/app/ui/materials/edit-form';
import Breadcrumbs from '@/app/ui/materials/breadcrums';
import { fetchMaterialById } from '@/app/lib/dataMaterials';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchMaterialTypes } from '@/app/lib/data';

export const metadata : Metadata = {
    title: "Edit Material"
};

export default async function Page({ params } : {params:  {id: number }} ) {
    const id = params.id;
    const [ material, materialsType ] = await Promise.all([
        fetchMaterialById(id),
        fetchMaterialTypes()
    ]);

    if (!material) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {label: 'Material', href: '/dashboard/materials' },
                    {
                        label: 'Editar material',
                        href: '/dashboard/materials',
                        active: true
                    },
                ]}
                />
                <Form material={ material } materialtypes={materialsType} />
        </main>
    )
}