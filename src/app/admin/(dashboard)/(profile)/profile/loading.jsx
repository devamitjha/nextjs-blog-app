"use client";
import Lottie from "react-lottie-player";
import LoadingAnimation from "@/assets/lottie/loading.json";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <Lottie
          loop
          animationData={LoadingAnimation}
          play
          style={{ width: 300, height: 300 }}
        />
        <p className="mt-4 text-lg text-gray-600">Page Not Found</p>
      </div>
  )
}