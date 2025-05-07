import UpdatedProductForm from "@/components/modules/shop/product/UpdatedProductForm";
import { getSingleProduct } from "@/services/product";
import React from "react";

const UpdateProduct = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const {data: product} = await getSingleProduct(productId);
  console.log(product);
  return (
    <div className="flex justify-center items-center">
      <UpdatedProductForm product={product} />
    </div>
  );
};

export default UpdateProduct;
