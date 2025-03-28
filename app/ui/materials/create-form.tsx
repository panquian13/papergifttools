'use client'

import Link from "next/link"
import { 
    Square3Stack3DIcon,
    PencilIcon,
    BeakerIcon,
    RectangleStackIcon,
    AdjustmentsHorizontalIcon
    } from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import {  MaterialType } from "@/app/lib/definitions";
import { createMaterial } from "@/app/lib/actionsMaterials";
import { useFormState } from "react-dom";
import { userAgentFromString } from "next/server";

export default function Form ( { materialtypes }: { materialtypes: MaterialType[] }) {
    const initialState = { message: null, errors: {} };
    const [ state, dispatch ] = useFormState(createMaterial, initialState );


    return (
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Invoice Amount */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Nombre*
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Agrega el nombre del material"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby="material-error"
                        />
                        <Square3Stack3DIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div id="material-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.name &&
                        state.errors.name.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </div>

                 <div className="mb-4">
                    <label htmlFor="materialtypeid" className="mb-2 block text-sm font-medium">
                        Tipo de Material*
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <select 
                                id="materialtypeid"
                                name="materialtypeid"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue=""
                                aria-describedby="materialType-error"
                            >
                                <option value="" disabled>
                                    Selecciona un tipo de Material
                                </option>
                                {materialtypes.map((materialtype) => (
                                    <option key={materialtype.materialtypeid} value={materialtype.materialtypeid}>
                                        {materialtype.name}
                                    </option>
                                ))}
                            </select>
                            {/* <Square3Stack3DIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                        </div>
                        <div id="customer-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.materialtypeid &&
                            state.errors.materialtypeid.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="size" className="mb-2 block text-sm font-medium">
                        Tamaño
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                        <input
                            id="size"
                            name="size"
                            type="text"
                            placeholder="Agrega el tamaño del material"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby="material-error"
                        />
                        <RectangleStackIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div id="material-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.description &&
                        state.errors.description.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="color" className="mb-2 block text-sm font-medium">
                        Color
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                        <input
                            id="color"
                            name="color"
                            type="text"
                            placeholder="Agrega el color del material"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby="material-error"
                        />
                        <AdjustmentsHorizontalIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div id="material-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.description &&
                        state.errors.description.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                        Descripción
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                        <input
                            id="description"
                            name="description"
                            type="text"
                            placeholder="Agrega el nombre del tipo de material"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby="material-error"
                        />
                        <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div id="material-error" aria-live="polite" aria-atomic="true">
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
                href="/dashboard/materials"
                className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
                Cancelar
                </Link>
                <Button type="submit">Crear material</Button>
            </div>
        </form>
    )
}