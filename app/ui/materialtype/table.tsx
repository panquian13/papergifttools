import { fetchMaterialTypes } from "@/app/lib/data";
import { MaterialType } from "@/app/lib/definitions";
import { UpdateMaterialType } from "./buttons";
import { DeleteMaterialType } from "../components/deletematerialtype/deletematerialtype"; 

export default async function MaterialsTypeTable(){
    const materialstype= await fetchMaterialTypes();

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Id
                            </th>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Material
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Descripción
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3 font-medium">
                                Editar
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {materialstype?.map((materialType) => (
                            <tr
                            key={materialType.materialtypeid}
                            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                            >
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <p>{materialType.materialtypeid}</p>
                            </td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <p>{materialType.name}</p>
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {materialType.description}
                            </td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex justify-end gap-3">
                                <UpdateMaterialType id={materialType.materialtypeid} />
                                <DeleteMaterialType id={materialType.materialtypeid} />
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