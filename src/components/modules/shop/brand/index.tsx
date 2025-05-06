"use client";
import React, { useState } from "react";

import CreateBrandModel from "./CreateBrandModel";
import { IBrand } from "@/types";
import { NMTable } from "@/components/ui/core/NMTable";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import { deleteBrand } from "@/services/brand";
import { toast } from "sonner";
import DeleteConfirmationModal from "@/components/ui/core/NMModel/DeleteConfirmationModal";

type ManageBrandProps = {
  brand: IBrand[];
};

const ManageBrand = ({ brand }: ManageBrandProps) => {
   const [isModalOpen, setModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
  
    const handleDelete = (data: IBrand) => {
      console.log(data);
      setSelectedId(data?._id);
      setSelectedItem(data?.name);
      setModalOpen(true);
    };

    const handleDeleteConfirm = async () => {
      try {
        if (selectedId) {
          const res = await deleteBrand(selectedId);
          console.log(res);
          if (res.success) {
            toast.success(res.message);
            setModalOpen(false);
          } else {
            toast.error(res.message);
          }
        }
      } catch (err: any) {
        console.error(err?.message);
      }
    };

  const columns: ColumnDef<IBrand>[] = [
    {
      accessorKey: "name",
      header: () => <div>Category Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.logo}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "isActive",
      header: () => <div>isActive</div>,
      cell: ({ row }) => (
        <div>
          {row.original.isActive ? (
            <p className="text-green-500 border bg-green-100 w-14 text-center px-1 rounded">
              True
            </p>
          ) : (
            <p className="text-red-500 border bg-red-100 w-14 text-center px-1 rounded">
              False
            </p>
          )}
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: () => <div>Action</div>,
      cell: ({ row }) => (
        <button
          className="text-red-500"
          title="Delete"
          onClick={() => handleDelete(row.original)}
        >
          <Trash className="w-5 h-5" />
        </button>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold">ManageBrand</h2>
        <CreateBrandModel />
      </div>
      <NMTable data={brand} columns={columns} />
      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ManageBrand;
