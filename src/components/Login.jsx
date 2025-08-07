import React from 'react'
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { Input } from "@/components/ui/input"

const Login = () => {
  return (
    <div className="mt-4">
        <div className="flex flex-col gap-3">
            <Button size="lg" className="bg-gray-200 text-black">
                <FaApple /> Login with Apple
            </Button>
            <Button size="lg" className="bg-green-50 text-black">
                <FcGoogle /> Login with Google
            </Button>
        </div>
        <p className="my-4 text-sm text-center text-gray-500">Or with email</p>
        <div className="input-containergrid w-full flex max-w-sm items-center flex-col gap-3">
            <Input type="email" placeholder="Email" className="mb-2 h-12" />
            <Input type="password" placeholder="Password"  className="mb-2 h-12"/>
        </div>
        <div className="flex w-full mt-4">
            <Button size="lg" className="w-full">
                Login
            </Button>
        </div>        
    </div>
  )
}

export default Login
