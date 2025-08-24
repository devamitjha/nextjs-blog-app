"use client"
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
     const [productTypes, setProductTypes] = useState({
        size: product.sizes[0],
        color: product.colors[0],
      });   
    
      const handleProductType = (type,value)=> {
        setProductTypes((prev) => ({
          ...prev,
          [type]: value,
        }));
      };
    const handleAddToCart = () => {
        dispatch(
            addToCart({
                ...product,
                quantity: 1,
                selectedSize: productTypes.size,
                selectedColor: productTypes.color,
            })
        );
        toast.success("Product added to cart")
    };    
    
  return (
    <div className="product-card bg-gray-100 shadow-md overflow-hidden rounded-2xl">
            <Link href={`shop/product/${product.id}`}>
                <div className="image-container relative aspect-[2/3] overflow-hidden">
                    <Image src={product.images[productTypes.color]} alt={product.name} fill required className="object-cover hover:scale-105 transition-all duration-300"/>
                </div>
            </Link>
            <div className="flex gap-2 md:gap-5 flex-col px-2 py-4 md:p-5">
                <div className="text-[12px] line-clamp-1 md:text-xl text-black">{product.name}</div>
                <div className="text-sm text-gray-500 line-clamp-2 md:line-clamp-none">{product.shortDescription}</div>
                {/* PRODUCT TYPES */}
                <div className="flex justify-start items-start md:items-center gap-3 flex-col md:flex-row">
                    {/* SIZES */}
                    <div className="size flex flex-col gap-1">
                        <span className="text-[12px] md:text-base text-gray-500">Size</span>
                        <select name="size" id="size" className="ring ring-gray-300 rounded-md px-2 py-1"
                             onChange={(e) => handleProductType("size", e.target.value)}
                        >
                            {product.sizes.map((size) => (
                                <option key={size} value={size}>
                                {size.toUpperCase()}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* COLORS */}
                    <div className="color flex flex-col gap-1">
                        <span className="text-[12px] md:text-base text-gray-500">Color</span>
                        <div className="flex items-center gap-2 h-7">
                            {
                                product.colors.map((color)=>(
                                    <div className=
                                    {`cursor-pointer border-1 ${
                                        productTypes.color === color
                                        ? "border-gray-400"
                                        : "border-gray-200"
                                    } rounded-full p-[1.2px]`}
                                    onClick={() => handleProductType("color", color)} key={color}>
                                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: color }}></div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className="font-medium">${product.price.toFixed(2)}</p>
                    <button
                    className="ring-0 md:ring-1 ring-gray-200 shadow-lg rounded-full md:rounded-md p-2 md:px-2 md:py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2"
                    onClick={handleAddToCart}
                    >
                        <ShoppingCart className="w-4 h-4" />
                        <span className="hidden md:flex">Add to Cart</span>
                    </button>
                </div>
            </div>        
    </div>
  )
}

export default ProductCard