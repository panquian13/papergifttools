import { fetchMaterials } from "@/app/lib/dataMaterials";
import { Materials } from "@/app/lib/definitions";
import { UpdateMaterial } from "../materials/buttons";
import { DeleteMaterial } from "../components/deleteMaterial/deletematerial";
import { fetchMaterialTypes } from "@/app/lib/data";

export default async function MaterialsTable(){
    const materials = await fetchMaterials();
    const materialsType = await fetchMaterialTypes();

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            Material
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                            Tipo
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                            Descripción
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                            Tamaño
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                            Color
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                            <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {materials?.map((material) => (
                            <tr
                            key={material.id}
                            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                            >
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <p>{material.name}</p>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {material.materialname}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {material.description}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">    
                                    {material.size}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {material.color}
                                </td>
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                    <UpdateMaterial id={material.id} />
                                    <DeleteMaterial id={material.id} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}