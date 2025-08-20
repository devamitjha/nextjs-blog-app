"use client";
import React from 'react';
import { useState } from "react";
import { Badge } from "../ui/badge";

function ApproveButton({ postId, orderStatus }) {
  const [loading, setLoading] = useState(false); 


  const handleApprove = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/posts/${postId}/approve`, {
        method: "PATCH",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Approval failed");

      alert("✅ Post approved!");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
        {orderStatus === "Pending" ? (
        <Badge
            size="sm"
            onClick={handleApprove}
            className={
            orderStatus === "Approved"
                ? "bg-green-600 text-white cursor-pointer"
                : orderStatus === "Pending"
                ? "bg-red-500 text-white cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }
        >
            {loading ? "Approving..." : orderStatus}
        </Badge>
        ):
        <Badge
            size="sm"
            className={
            orderStatus === "Approved"
                ? "bg-green-600 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }
        >
            {orderStatus}
        </Badge>
    }
    </>
    
    
  );
}

export default ApproveButton;
