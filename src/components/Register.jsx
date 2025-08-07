import React from 'react'
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { Input } from "@/components/ui/input"
import Link from 'next/link';

const Register = () => {
  return (
    <div className="mt-4">
        <div className="flex flex-col gap-3">
            <Button size="lg" className="bg-gray-200 text-black">
                <FaApple /> Register with Apple
            </Button>
            <Button size="lg" className="bg-green-50 text-black">
                <FcGoogle />Register with Google
            </Button>
        </div>
        <p className="my-4 text-sm text-center text-gray-500">Or with email</p>
        <div className="input-containergrid w-full flex max-w-sm items-center flex-col gap-3">
            <Input type="text" placeholder="User Name" className="mb-2 h-12" />
            <Input type="email" placeholder="Email" className="mb-2 h-12" />
            <Input type="password" placeholder="Password"  className="mb-2 h-12"/>
        </div>
        <div className="flex w-full mt-4">
            <Button size="lg" className="w-full">
                Create Account
            </Button>
        </div>  
        <p className="text-sm text-gray-400 text-center my-4">By signing up, I agree to the <Link href="#" className="underline underline-offset-4">Terms and Conditions</Link>.</p>
    </div>
  )
}

export default Register
