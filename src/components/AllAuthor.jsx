"use client";
import React from 'react'
import Image from 'next/image';
import AuthorBg from "@/assets/author/1.jpg";
import AuthorImg from "@/assets/author/author.webp";
import { AuthorList } from '@/lib/blogData';
import Link from 'next/link';
import { useDispatch } from 'react-redux'
import { switchSheet, setSheetAfterDelay } from '@/store/slices/sheetSlice'

const AllAuthor = ({authorList}) => {
  const dispatch = useDispatch();
   const closeSheet = () => {
      dispatch(switchSheet()) // sets activeSheet to null
    }
  return (
    <div className="grid grid-cols-2 md:grid-col-3 xl:grid-col-4 gap-4">
      {
        authorList?.map((author)=>{
          return(
              <Link href={`/author/${author.slug}`} className="author-card rounded-xl overflow-hidden border border-gray-200" key={author._id} onClick={closeSheet}>
                <div className="w-full h-[100px] overflow-hidden relative">
                    <Image src={author.bgImg} alt="author-bg" priority fill className="object-cover w-full h-auto" />
                </div>
                <div className="mx-3 -mt-8 pb-7 text-center relative z-2">
                    <div className="w-16 h-16 relative size-16 ring-2 ring-white inline-grid shrink-0 bg-neutral-200 align-middle rounded-full overflow-hidden">
                      <Image src={author.avatar} priority fill className="w-16 h-16 object-cover" alt="author-name"/> 
                    </div>
                    <div className="mt-3 space-y-1">
                      <p className="line-clamp-1 text-base font-medium">{author.name}</p>
                      <p className="line-clamp-1 text-sm text-neutral-500 dark:text-neutral-400">{author.role}</p>
                      <p className="line-clamp-1 text-sm text-neutral-500 dark:text-neutral-400">Posts:{author.totalPost}</p>
                    </div>
                </div>
              </Link>
          )
        })
      }
      
    </div>
  )
}

export default AllAuthor