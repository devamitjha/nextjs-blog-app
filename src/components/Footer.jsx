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
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from '@/components/ui/drawer'

const BaseDrawer = ({ open, onOpenChange, title, description, children }) => (
  <Drawer open={open} onOpenChange={onOpenChange}>
    <DrawerContent>
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">{children}</div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
)

const Footer = () => {
  const pathname = usePathname()
  const [user, setUser] = useState(false)
  const [drawer, setDrawer] = useState(null) // 'category' | 'login' | 'register' | null

  const isActive = (path) => pathname === path

  const footerItems = [
    { href: '/', icon: House },
    {
      icon: Layers2,
      onClick: () => setDrawer('category')
    },
    {
      icon: user ? UserRoundCheck : UserRound,
      href: user ? '/profile' : undefined,
      onClick: user ? undefined : () => setDrawer('login')
    },
    { href: '/chat', icon: MessagesSquare },
    { href: '/search', icon: Search }
  ]

  return (
    <>
      {/* Reusable Drawers */}
      <BaseDrawer
        open={drawer === 'category'}
        onOpenChange={(open) => !open && setDrawer(null)}
        title="Select Category"
        description="Choose an item from the list"
      >
        Category Drawer Content
      </BaseDrawer>

      <BaseDrawer
        open={drawer === 'login'}
        onOpenChange={(open) => !open && setDrawer(null)}
        title="Login"
        description="Access your account"
      >
        <Button
          variant="outline"
          onClick={() => setDrawer('register')}
        >
          Go to Register
        </Button>
      </BaseDrawer>

      <BaseDrawer
        open={drawer === 'register'}
        onOpenChange={(open) => !open && setDrawer(null)}
        title="Register"
        description="Create a new account"
      >
        <Button
          variant="outline"
          onClick={() => setDrawer('login')}
        >
          Back to Login
        </Button>
      </BaseDrawer>

      {/* Footer Navigation */}
      <div className="max-w-[1024px] w-full fixed bottom-0 left-1/2 h-14 transform -translate-x-1/2 flex justify-between items-center bg-black gap-2 z-50">
        {footerItems.map((item, index) => {
          const Icon = item.icon
          const isCurrent = item.href && isActive(item.href)

          const commonClass = 'w-[20%] h-full flex justify-center items-center cursor-pointer'

          return item.href ? (
            <Link
              key={index}
              href={item.href}
              className={commonClass}
            >
              <Icon color={isCurrent ? '#ff6900' : '#fff'} size={20} />
            </Link>
          ) : (
            <div
              key={index}
              onClick={item.onClick}
              className={commonClass}
            >
              <Icon color="#fff" size={20} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Footer
