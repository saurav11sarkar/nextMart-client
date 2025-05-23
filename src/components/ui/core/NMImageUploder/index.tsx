import React from "react";
import { Input } from "../../input";
import { cn } from "@/lib/utils";


type TImageUploderprops = {
  label?: string;
  className?: string;
  setImageFiles: React.Dispatch<React.SetStateAction<File[]>>;
  setImagePreview: React.Dispatch<React.SetStateAction<string[]>>;
};

const NMImageUploader = ({
  setImageFiles,
  setImagePreview,
  label = "Upload Images",
  className,
}: TImageUploderprops) => {


  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reder = new FileReader();
      reder.onloadend = () => {
        setImagePreview((prev) => [...prev, reder.result as string]);
      };
      reder.readAsDataURL(file);
    }

    event.target.value = "";
  };

  return (
    <div className={cn("w-full border border-dashed border-gray-300 rounded-xl p-4 text-center transition hover:border-blue-500 hover:bg-blue-50",className)}>
      <label className="flex flex-col items-center justify-center cursor-pointer space-y-2">
        <svg
          className="w-8 h-8 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16V4m0 0L3 8m4-4l4 4m6 4v8m0 0l4-4m-4 4l-4-4"
          />
        </svg>
        <span className="text-sm text-gray-600">
          {/* Click to upload or drag and drop */}
          {label}
        </span>
        <Input
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          id="file-upload"
          onChange={handleImageChange}
        />
      </label>
     
    </div>
  );
};

export default NMImageUploader;
