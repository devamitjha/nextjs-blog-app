'use client'
import React, { useState } from 'react'
import { Bell, Sun, MoonStar } from 'lucide-react';
import Link from 'next/link'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const Header = () => {
  const notification = 1;
  const [dark, setDark] = useState(false);
  const lightDarkMode = ()=>{
    setDark(!dark)
  }
  return (
    <div className="w-full h-12 bg-white flex justify-between items-center gap-4 px-4 mt-1 mb-4 shadow-sm">
      <div className="avatar">
        <Avatar>
          <AvatarImage src="https://randomuser.me/api/portraits/women/77.jpg" alt="@shadcn" />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
      </div>
      <div className="app-info flex justify-end items-center gap-4">
          <div className="dark-light" onClick={lightDarkMode}>
            {
              dark ? 
                  <div className="dark">
                    <Sun />
                  </div>
              :  <div className="light">
                  <MoonStar />
                </div>              
            }            
          </div>
          <Link href="notification" className="relative">
            <Bell />
            {notification >=1 && <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black text-white flex justify-center items-center text-xs">5</div>}            
          </Link>
      </div>
    </div>
  )
}

export default Header
