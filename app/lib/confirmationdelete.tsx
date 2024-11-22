// pages/YourPage.tsx
import React, { useState } from 'react';
import { revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres';
import Link from "next/link";
import ConfirmationDialog from '@/app/ui/components/confirmationDialog';

export async function DeleteConfirmation({ id }: {id: number }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDialogOpen(true);
  };

  const handleConfirmDelete = ({ id }: {id: number }) => {
    setIsDialogOpen(false);
    await sql `DELETE FROM materialtype WHERE materialtypeid = ${id}`;
    revalidatePath('/dashboard/materialstype');
    console.log('Item deleted');
  };

  const handleCancelDelete = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <button 
        onClick={handleDeleteClick} 
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Delete Item
      </button>
      
      <ConfirmationDialog
        isOpen={isDialogOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        message="Are you sure you want to delete this item?"
      />
    </div>
  );
};
