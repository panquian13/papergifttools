'use client'
import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import ConfirmationDialog from "../confirmationDialog";
import { deletematerial } from "@/app/lib/actionsMaterials";
import { fetchMaterialById } from "@/app/lib/dataMaterials";

export function DeleteMaterial({ id }: { id: number }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
      
    const handleDelete = async () => {
        // TODO: Validate no Material exists with the material Type, If so then return a message that can't deletet the type, otherwise continue with delete
    
        await deletematerial(id);
        // await fetch(`/api/deleteMaterialType/${id}`, { method: "DELETE" });
        setIsModalOpen(false);
        // Optionally refresh or update the UI after deletion
    }

    return (
        <>
        <button 
            type="button"
            className="rounded-md border p-2 hover:bg-gray-100"
            onClick={() => setIsModalOpen(true)}>
                <span className="sr-only">Borrar</span>
                <TrashIcon className="w-4"></TrashIcon>
            </button>

            <ConfirmationDialog
                isOpen={isModalOpen}
                title = "Confirmación borrado"
                message="¿Estas seguro de que deseas eliminar este material? Esta acción no se puede deshacer."
                onConfirm={handleDelete}
                onCancel={ () => setIsModalOpen(false)}
                />
        </>
    );
}