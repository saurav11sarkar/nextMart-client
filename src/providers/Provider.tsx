"use client";
import UseProvider from "@/contexts/UserContexts";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <UseProvider>{children}</UseProvider>;
};

export default Provider;
