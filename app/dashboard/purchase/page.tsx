import { lusitana } from "@/app/ui/fonts"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Compras'
}

export default function Page() {
    return (
        <>
            <div className="flex w-full justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Compras</h1>
            </div>
            <div className="mt-2 flex items-center justify-between gap-2 md:mt-8">
                {/* <Search placeholder="Search invoices..." /> */}
            </div>
            <div className="w-full">
                {/* < MaterialsTable /> */}
            </div>
        </>
    );
}