import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductCard";
import { getAllProducts } from "@/services/product";
import { IProduct } from "@/types";
import Link from "next/link";
import React from "react";

const FeaturedProduct = async () => {
  const { data: products } = await getAllProducts();
  console.log(products);
  return (
    <div className="bg-white/50 py-10">
      <div className="container mx-auto my-16 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-2xl">Featured Product</h2>
          <Link href="/product">
            <Button
              variant="outline"
              className="rounded-full font-bold text-sm"
            >
              All Collection
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {Array(10).fill(products?.[0])?.map((product: IProduct, index: number) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
