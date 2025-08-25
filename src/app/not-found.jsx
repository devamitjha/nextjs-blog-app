"use client";
import Lottie from "react-lottie-player";
import ErrorNotFound from "@/assets/lottie/Error_404.json";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <Lottie
          loop
          animationData={ErrorNotFound}
          play
          style={{ width: 300, height: 300 }}
        />
        <p className="mt-4 text-lg text-gray-600">Page Not Found</p>
      </div>
  )
}