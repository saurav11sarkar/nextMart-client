import ManageCategory from "@/components/modules/shop/category";
import { getAllCategory } from "@/services/category";
import React from "react";

const ProductCategory = async () => {
  const {data,meta} = await getAllCategory();
  
  return (
    <div>
      <ManageCategory categories={data} />
    </div>
  );
};

export default ProductCategory;
