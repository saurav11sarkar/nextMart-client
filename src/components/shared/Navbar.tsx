import React from 'react'
import { Button } from '../ui/button'
import { Heart, ShoppingBag } from 'lucide-react'
import Logo from '@/assets/svgs/Logo'

const Navbar = () => {
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
        </nav>
      </div>
    </header>
  )
}

export default Navbar