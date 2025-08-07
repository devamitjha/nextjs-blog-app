import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const ForgotPassword = () => {
  return (
    <div className="mt-4">        
        <p className="my-4 text-sm text-center text-gray-500">Enter the email associated with your account and we'll send you a link to reset your password.</p>
        <div className="input-containergrid w-full flex max-w-sm items-center flex-col gap-3">
            <Input type="email" placeholder="Email" className="mb-2 h-12" />
        </div>
        <div className="flex w-full mt-4">
            <Button size="lg" className="w-full">
                Reset My Password
            </Button>
        </div> 
        <div className="flex justify-between items-center my-4">
            <Button variant="link" className="text-blue-500">Use SMS instead</Button>
            <Button variant="link" className="text-blue-500">Contact Support</Button>
        </div>
    </div>
  )
}

export default ForgotPassword
