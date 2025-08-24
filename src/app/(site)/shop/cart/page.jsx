"use client"
import React from 'react'
import { Trash2, ArrowRight } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import Image from 'next/image';
import { removeFromCart } from "@/store/slices/cartSlice";
import Lottie from "react-lottie-player";
import animationData from "@/assets/lottie/empty.json";
import { toast } from 'react-toastify';
import { useRouter, useSearchParams } from "next/navigation";

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];


export default function Cart() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const activeStep = parseInt(searchParams.get("step") || "1");
  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
    toast.success(`${item.name} removed successfully`);
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Lottie
          loop
          animationData={animationData}
          play
          style={{ width: 300, height: 300 }}
        />
        <p className="mt-4 text-lg text-gray-600">Your cart is empty</p>
      </div>
    );
  }
  
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center mt-12">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      {/* STEPS */}
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-10">
        {steps.map((step) => (
          <div
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-200"
            }`}
            key={step.id}
          >
            <div
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                step.id === activeStep ? "bg-gray-800" : "bg-gray-400"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex lg:justify-between flex-col lg:flex-row items-start gap-10 px-4 mb-25">
        <div className="w-full lg:w-7/12 bg-white shadow-lg border border-gray-100 p-8 rounded-lg">
          {cartItems.map((item) => (
            <div
              className="flex items-center justify-between mb-6"
              key={item.id + item.selectedSize + item.selectedColor}
            >
              {/* IMAGE AND DETAILS */}
              <div className="flex gap-8">
                <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={item.images[item.selectedColor]}
                    alt={item.name}
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
                    <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>
                    <p className="text-xs text-gray-500">Color: {item.selectedColor}</p>
                  </div>
                  <p className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              {/* DELETE BUTTON */}
              <button
                onClick={() => handleRemove(item)}
                className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-5/12 bg-white shadow-lg border border-gray-100 p-8 flex flex-col rounded-lg gap-8 h-max">
          <h2 className="font-semibold">Cart Details</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Subtotal</p>
              <p className="font-medium">
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Discount(10%)</p>
              <p className="font-medium">$ 10</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Shipping Fee</p>
              <p className="font-medium">$10</p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">Total</p>
              <p className="font-medium">
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
          <button                      
              className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
            >
              Continue
              <ArrowRight className="w-3 h-3" />
            </button>
        </div>
      </div>
    </div>
  )
}
