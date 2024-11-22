import { lusitana } from "@/app/ui/fonts"
import { Metadata } from "next"
import MaterialsTable  from "@/app/ui/materials/table";
import { ViewMaterialType } from "@/app/ui/materialtype/buttons";

export const metadata: Metadata = {
    title: 'Materials'
};

export default function Page() {
    return (
        <>
            <div className="flex w-full justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Materiales</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/* <Search placeholder="Search invoices..." /> */}
                <ViewMaterialType />
            </div>
            <div className="w-full">
                < MaterialsTable />
            </div>
        </>
    )
}
