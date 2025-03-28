import { PencilIcon, PlusIcon, TrashIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import { GetServerSideProps } from "next";
import Modal from "../components/confirmationDialog/ConfirmationDialog";
import { MaterialType } from "@/app/lib/definitions";

export function CreateMaterial() {
    return (
        <Link
            href="/dashboard/materials/create"
            className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Crear Nuevo Material</span>
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}

export function UpdateMaterial({ id }: { id: number }) {
    return  (
        <Link href={`/dashboard/materials/${id}/edit`}
        className="rounded-md border p-2 hover:bg-gray-100"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}