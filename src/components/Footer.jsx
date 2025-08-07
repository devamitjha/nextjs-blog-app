'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  House,
  Layers2,
  MessagesSquare,
  Search,
  UserRound,
  UserRoundCheck
} from 'lucide-react'
import Image from 'next/image'
import {Sheet} from 'react-modal-sheet'

import Login from './Login'
import Register from './Register'
import ForgotPassword from './ForgotPassword'

import LoginImage from "@/assets/images/signin.png"
import RegisterImage from "@/assets/images/signup.png"
import ForgotPasswordImage from "@/assets/images/forgot-password.png"
import { Button } from './ui/button'

const SheetWrapper = ({ isOpen, onClose, title, image, children }) => (
  <Sheet isOpen={isOpen} onClose={onClose} initialSnap={0.8} detent="content-height">
    <Sheet.Container>
      <Sheet.Header />
      <Sheet.Content>
        <Sheet.Scroller>
          <div className="p-4 space-y-4 max-w-md mx-auto overflow-x-hidden">
            {image && (<Image src={image} alt={title} className="w-full h-auto rounded"/>)}
            <h2 className="text-xl font-semibold text-center">{title}</h2>
            {children}
          </div>
        </Sheet.Scroller>
      </Sheet.Content>
    </Sheet.Container>
    <Sheet.Backdrop onClick={onClose} />
  </Sheet>
)

const Footer = () => {
  const pathname = usePathname()
  const [user, setUser] = useState(false)
  const [activeSheet, setActiveSheet] = useState(null) // 'category' | 'login' | 'register'
  const openSheet = (sheetName) => {
    setActiveSheet(null) // close current
    setTimeout(() => setActiveSheet(sheetName), 200) // open next after animation
  }
  const isActive = (path) => pathname === path
  const footerItems = [
    { href: '/', icon: House },
    {icon: Layers2, onClick: () => openSheet('category')},
    {icon: user ? UserRoundCheck : UserRound, href: user ? '/profile' : undefined, onClick: user ? undefined : () => openSheet('login')},
    { href: '/chat', icon: MessagesSquare },
    { href: '/search', icon: Search }
  ]

  return (
    <>
      {/* Category Sheet */}
      <SheetWrapper isOpen={activeSheet === 'category'} onClose={() => setActiveSheet(null)} title="Select Category">
        <p>Category drawer content goes here.</p>
      </SheetWrapper>

      {/* Login Sheet */}
      <SheetWrapper isOpen={activeSheet === 'login'} onClose={() => setActiveSheet(null)} title="Login" image={LoginImage}>
        <Login />
        <div className="flex justify-between items-center">
          <Button variant="link" onClick={() => openSheet('forgotpassword')} className="text-blue-500">Forgot Password?</Button>
          <Button variant="link" onClick={() => openSheet('register')} className="text-blue-500">Register</Button>
        </div>
      </SheetWrapper>

      {/* Forgot Password Sheet */}
      <SheetWrapper isOpen={activeSheet === 'forgotpassword'} onClose={() => setActiveSheet(null)} title="Forgot Password" image={ForgotPasswordImage}>
        <ForgotPassword />
      </SheetWrapper>

      {/* Register Sheet */}
      <SheetWrapper isOpen={activeSheet === 'register'} onClose={() => setActiveSheet(null)} title="Register" image={RegisterImage}>
        <Register />
        <p className="text-md text-center mb-4">
          Have an account?
          <Button variant="link" onClick={() => openSheet('login')} className="text-blue-500 font-bold p-0 ms-1">Log in</Button>
        </p>
       
      </SheetWrapper>

      {/* Footer Navigation */}
      <div className="max-w-[1024px] w-full fixed bottom-0 left-1/2 h-14 transform -translate-x-1/2 flex justify-between items-center bg-black gap-2 z-50">
        {footerItems.map((item, index) => {
          const Icon = item.icon
          const isCurrent = item.href && isActive(item.href)
          const commonClass = 'w-[20%] h-full flex justify-center items-center cursor-pointer'

          return item.href ? (
            <Link key={index} href={item.href} className={commonClass}>
              <Icon color={isCurrent ? '#ff6900' : '#fff'} size={20} />
            </Link>
          ) : (
            <div key={index} onClick={item.onClick} className={commonClass}>
              <Icon color="#fff" size={20} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Footer
