'use client'

import React, { useState, useEffect } from 'react'
import { Sun, MoonStar, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const Header = () => {
  const pathname = usePathname();
  const isShop = pathname.includes("shop");
  const titleText = isShop ? "Shop" : "Blog";
  const redirectPath = isShop ? "/shop" : "/";

  // 🛒 get cart state from Redux
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const [dark, setDark] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)


  useEffect(() => {
    setHasMounted(true)
  }, [])

  const lightDarkMode = () => {
    setDark(!dark)
  }

  if (!hasMounted) return null // Prevent hydration mismatch

  return (
    <div className="w-full h-12 bg-white flex justify-between items-center gap-4 px-4 mt-1 mb-4 shadow-sm">
      <div className="avatar w-3/12">
        <Avatar>
          <AvatarImage src="https://randomuser.me/api/portraits/women/77.jpg" alt="@shadcn" />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
      </div>
      <Link href={redirectPath} className="logo w-6/12 text-center text-sm uppercase font-semibold">Dev {titleText}</Link>
      <div className="app-info w-3/12 flex justify-end items-center gap-4">
        <div className="dark-light" onClick={lightDarkMode}>
          {dark ? <Sun /> : <MoonStar />}
        </div>
        <Link href="/shop/cart" className="relative">
          <ShoppingCart />
          {cartCount >= 1 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black text-white flex justify-center items-center text-xs">
              {cartCount}
            </div>
          )}
        </Link>
      </div>
    </div>
  )
}

export default Header
