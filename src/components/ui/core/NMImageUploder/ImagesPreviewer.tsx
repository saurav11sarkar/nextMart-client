import Image from "next/image";
import React from "react";
import { Button } from "../../button";
import { X } from "lucide-react";

type TImageUploaderProps = {
  imagePreview: string[];
  className?: string;
  setImageFiles: React.Dispatch<React.SetStateAction<File[]>>;
  setImagePreview: React.Dispatch<React.SetStateAction<string[]>>;
};

const ImagesPreviewer = ({
  setImageFiles,
  imagePreview,
  setImagePreview,
  className,
}: TImageUploaderProps) => {
  const handleRemove = (index: number) => {
    setImageFiles((prev) => prev.filter((_, inx) => inx !== index));
    setImagePreview((prev) => prev.filter((_, inx) => inx !== index));
  };

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {imagePreview.map((preview, index) => (
        <div
          key={index}
          className="relative w-full h-[120px] rounded-lg overflow-hidden border border-dashed border-gray-300 shadow-sm"
        >
          <Image
            src={preview}
            alt={`Preview ${index + 1}`}
            width={200}
            height={200}
            className="object-cover w-full h-full rounded-lg"
          />
          <Button
            type="button"
            size="icon"
            onClick={() => handleRemove(index)}
            className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 p-0 rounded-full"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ImagesPreviewer;
