'use client'

import React, { useState, useEffect } from 'react'
import { Sun, MoonStar, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const Header = () => {
  const notification = 1
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
      <Link href="/" className="logo w-6/12 text-center text-sm uppercase font-semibold">Dev Blog</Link>
      <div className="app-info w-3/12 flex justify-end items-center gap-4">
        <div className="dark-light" onClick={lightDarkMode}>
          {dark ? <Sun /> : <MoonStar />}
        </div>
        <Link href="/shop/cart" className="relative">
          <ShoppingCart />
          {notification >= 1 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black text-white flex justify-center items-center text-xs">
              5
            </div>
          )}
        </Link>
      </div>
    </div>
  )
}

export default Header
