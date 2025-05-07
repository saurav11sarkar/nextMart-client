import ManageBrand from "@/components/modules/shop/brand";
import { getAllBrands } from "@/services/brand";
import React from "react";

const ProductBrand = async () => {
  const {data, meta} = await getAllBrands();

  return (
    <div>
      <ManageBrand brand={data} />
    </div>
  );
};

export default ProductBrand;
