import { PencilIcon, PlusIcon, TrashIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { deleteMaterialType } from "@/app/lib/actions";
import Link from "next/link";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import { GetServerSideProps } from "next";
import Modal from "../components/confirmationDialog/ConfirmationDialog";

export function CreateMaterialType() {
  return (
    <Link 
      href="/dashboard/materialstype/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span className="hidden md:block">Crear Nuevo Tipo</span>{' '}
        <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function ViewMaterialType() {
  return (
    <Link
      href="/dashboard/materialstype"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span className="hidden md:block">Ver tipo de materiales</span>{' '}
        <MagnifyingGlassIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateMaterialType({ id }: { id: number }) {
  return (
    <Link
      href={`/dashboard/materialstype/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteMaterialType({ id }: {id: number }) {
  const deleteMaterialTypeWithId = deleteMaterialType.bind(null, id);

  return (
    <form action={deleteMaterialTypeWithId} >
      <button type="submit" className="rounded-md border p-2 hover: bg-gray-100">
        <span className="sr-only">Borrar</span>
        <TrashIcon className="w-4" />
      </button>
     </form>
  );
}

