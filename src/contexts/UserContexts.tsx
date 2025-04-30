"use client"
import { getCurrentUser } from "@/services/authservice";
import { IUser } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

interface IUserProviderValues {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const UseContext = createContext<IUserProviderValues | undefined>(undefined);

const UseProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = async () => {
    const res = await getCurrentUser();
    setUser(res);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    handleLogin();
  }, [isLoggedIn]);

  return (
    <UseContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </UseContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UseContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default UseProvider;
