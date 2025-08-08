'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { allCategoriesData as categories } from '@/lib/blogData'
import { useDispatch } from 'react-redux'
import { switchSheet, setSheetAfterDelay } from '@/store/slices/sheetSlice'

const AllCategories = ({ title, pageLocation }) => {
  const displayedCategories = pageLocation ? categories.slice(0, 6) : categories
  const dispatch = useDispatch()

  // ✅ Open sheet with animation delay
  const openSheet = (sheetName) => {
    dispatch(switchSheet()) // close current
    setTimeout(() => {
      dispatch(setSheetAfterDelay(sheetName)) // open next after animation
    }, 200)
  }

  // ✅ Close sheet
  const closeSheet = () => {
    dispatch(switchSheet()) // sets activeSheet to null
  }

  return (
    <div className="latest-posts mb-8">
      {
        title && <div className="title-container mb-4 px-4 flex justify-between items-center gap-4">
                    <h3 className="text-xl font-semibold tracking-tight text-pretty text-neutral-950">{title}</h3>
                    <p className="text-sm font-semibold text-blue-400" onClick={() => openSheet('category')}>View All</p>
                </div>  
      }
          
      <div className="w-full px-4 grid grid-cols-2 md:grid-cols-3 gap-4">      
      {
        displayedCategories.map((item, i)=>{
          return(
            <div className="relative cardAfter overflow-hidden rounded-md" key={i}>
                <Link href={item.url} className="relative" onClick={closeSheet}>
                    <Image src={item.img} alt={item.title} width={"auto"} height={"auto"}  className="object-cover w-[100%] h-[100px] md:h-[150px]"/>    
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
