import Category from "@/components/modules/home/category";
import FeaturedProduct from "@/components/modules/home/featuredProduct";
import HeroSection from "@/components/modules/home/homeSection";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <FeaturedProduct />
    </div>
  );
};

export default HomePage;
