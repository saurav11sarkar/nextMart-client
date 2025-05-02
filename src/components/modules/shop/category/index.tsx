import React from "react";
import CreateCategoryModel from "./CreateCategoryModel";

const ManageCategory = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold">ManageCategory</h2>
      <CreateCategoryModel/>
      </div>
    </div>
  );
};

export default ManageCategory;
