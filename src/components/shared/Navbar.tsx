"use client";
import React from "react";
import { Button } from "../ui/button";
import { Heart, LogOut, ShoppingBag } from "lucide-react";
import Logo from "@/assets/svgs/Logo";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { logout } from "@/services/authservice";
import { useUser } from "@/contexts/UserContexts";

const Navbar = () => {
  const { user, setIsLoggedIn } = useUser();

  const handleLogout = () => {
    logout();
    setIsLoggedIn(true);
  };

  return (
    <header className="border-b w-full bg-gray-100">
      <div className="container mx-auto flex justify-between items-center h-16 px-3">
        <h1 className="text-2xl font-black flex items-center">
          <Logo /> Next Mart
        </h1>
        <div className="max-w-md grow">
          <input
            type="text"
            placeholder="Search for product"
            className="w-full max-w-6xl border border-gray-300 rounded-full py-3 px-5"
          />
        </div>
        <nav className="flex gap-2">
          <Button variant={"outline"} className="rounded-full p-0 size-10">
            <Heart />
          </Button>
          <Button variant={"outline"} className="rounded-full p-0 size-10">
            <ShoppingBag />
          </Button>

          {!user ? (
            <Link href={"/login"}>
              <Button className="rounded-full" variant={"outline"}>
                Login
              </Button>
            </Link>
          ) : (
            <>
              {!user?.hasShop && (
                <Link href={"/create-shop"}>
                  <Button className="rounded-full">Create Shop</Button>
                </Link>
              )}

              {/* avator */}

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>user</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  <DropdownMenuItem>My Shop</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className=" cursor-pointer"
                    onClick={handleLogout}
                  >
                    <LogOut className="text-red-500" />{" "}
                    <span className="text-red-500">Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
