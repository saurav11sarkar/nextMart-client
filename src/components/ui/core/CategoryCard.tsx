import { ICategorys } from "@/types";
import Image from "next/image";
import React from "react";
import icon from "@/assets/graduate.png";

const CategoryCard = ({ category }: { category: ICategorys }) => {
  return (
    <div className="bg-white/50 border-2 border-white rounded-2xl text-center p-6 h-44">
      <Image
        src={category.icon || icon}
        alt="category icon"
        width={100}
        height={150}
        className="mx-auto"
      />
      <h3 className="text-md font-semibold truncate mt-3">{category?.name}</h3>
    </div>
  );
};

export default CategoryCard;
