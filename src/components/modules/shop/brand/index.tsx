import React from "react";

import CreateBrandModel from "./CreateBrandModel";

const ManageBrand = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">ManageBrand</h2>
        <CreateBrandModel />
      </div>
    </div>
  );
};

export default ManageBrand;
