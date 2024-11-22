'use client';

import { MaterialType } from "@/app/lib/definitions";
import {
    PencilIcon,
    Square3Stack3DIcon
} from '@heroicons/react/24/outline';
import Link from "next/link";
import { Button } from "@/app/ui/button";
import { updateMaterialType } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { userAgentFromString } from "next/server";

export default function EditMaterialTypeForm({
    materialType
}: {
    materialType: MaterialType;
}) {
    const initialState = { message: null, errors: {} };
    const UpdateMaterialTypeWithId = updateMaterialType.bind(null, materialType.materialtypeid );
    const [state, dispatch] = useFormState(UpdateMaterialTypeWithId, initialState);

    return (
      <form action={dispatch}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          {/* Invoice Amount */}
          <div className="mb-4">
            <label htmlFor="amount" className="mb-2 block text-sm font-medium">
              Agrega el nombre
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  defaultValue={materialType.name}
                  placeholder="Agrega el nombre del tipo de material"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  aria-describedby="materialType-error"
                />
                <Square3Stack3DIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div id="materialType-error" aria-live="polite" aria-atomic="true">
              {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="mb-2 block text-sm font-medium">
              Agrega la descripción
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="description"
                  name="description"
                  type="text"
                  defaultValue={materialType.description}
                  placeholder="Agrega el nombre del tipo de material"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  aria-describedby="materialType-error"
                />
                <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div id="materialType-error" aria-live="polite" aria-atomic="true">
              {state.errors?.description &&
              state.errors.description.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/materialstype"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancelar
          </Link>
          <Button type="submit">Editar</Button>
        </div>
      </form>
    );
}

