'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { allCategoriesData } from '@/lib/blogData'

const AllCategories = ({title}) => {
  return (
    <div className="latest-posts mb-8">
      <div className="title-container mb-4 px-4 flex justify-between items-center gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-pretty text-neutral-950">{title}</h3>
          <p className="text-sm font-semibold text-blue-400">View All</p>
      </div>      
      <div className="w-full px-4 grid grid-cols-2 md:grid-cols-3 gap-4">      
      {
        allCategoriesData.map((item, i)=>{
          return(
            <div className="relative cardAfter overflow-hidden rounded-md" key={i}>
                <Link href={item.url} className="relative">
                    <Image src={item.img} alt={item.title} width={"100%"} height={100}  className="object-cover w-[100%] h-[100px] md:h-[150px]"/>    
                    <p className="text-white absolute top-1/2 left-1/2 transform -translate-1/2 z-20 uppercase text-base font-semibold">{item.title}</p>         
                </Link>                
            </div>
            
          )
        })
      }
      </div>
    </div>

  )
}

export default AllCategories
