import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/core/CategoryCard";
import { getAllCategory } from "@/services/category";
import { ICategorys } from "@/types";
import Link from "next/link";

const Category = async () => {
  const { data: categories } = await getAllCategory();

  return (
    <div className="container mx-auto my-16 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-2xl">Categories</h2>
        <Link href="/product">
          <Button variant="outline" className="rounded-full font-bold text-sm">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {Array(12).fill(categories?.[0]).map((category: ICategorys, index: number) => (
          <CategoryCard category={category} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Category;
