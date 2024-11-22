import { lusitana } from "@/app/ui/fonts"
import { Metadata } from "next"
import MaterialsTypeTable  from "@/app/ui/materialtype/table";
import { CreateMaterialType } from "@/app/ui/materialtype/buttons";

export const metadata: Metadata = {
    title: 'MaterialsType'
};

export default function Page() {
    return (
        <>
            <div className="flex w-full justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Tipo de Materiales</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/* <Search placeholder="Search invoices..." /> */}
                <CreateMaterialType />
            </div>
            <div className="w-full">
                < MaterialsTypeTable />
            </div>
        </>
    )
}

