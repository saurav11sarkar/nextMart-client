import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/services/authservice";
import React from "react";

const HomePage = async () => {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <div>
      <h1>Wellcome to next mart</h1>
      <Button>Go to shop</Button>
    </div>
  );
};

export default HomePage;
