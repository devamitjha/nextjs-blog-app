import React from 'react'
import {ProductList} from "@/lib/productList"
import ProductCategories from "@/components/ProductCategories"
import ProductCard from "@/components/ProductCard"

export default function Shop(){
  return (
    <div className="w-full px-4 mb-25">
      <ProductCategories/>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
        {
          ProductList.map((product)=>(
            <ProductCard product={product} key={product.id}/>            
          ))
        }
      </div>
    </div>
  )
}
