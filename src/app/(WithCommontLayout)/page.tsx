"use client";

import { useUser } from "@/contexts/UserContexts";
import React from "react";

const HomePage = () => {
  const user = useUser();

  return (
    <div>
      <h1 className="text-center mt-4">
        Wellcome to next mart{" "}
        <span className="font-semibold text-sky-600">{user?.user?.name}</span>
        <span className="font-semibold text-red-600"> {user?.user?.email}</span>
      </h1>
    </div>
  );
};

export default HomePage;
