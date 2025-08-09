import React from 'react'
import Image from 'next/image';
import AuthorBg from "@/assets/author/1.jpg";
import AuthorImg from "@/assets/author/author.webp";
import { AuthorList } from '@/lib/blogData';

const AllAuthor = () => {
  return (
    <div className="grid grid-cols-2 md:grid-col-3 xl:grid-col-4 gap-4">
      {
        AuthorList?.map((item, i)=>{
          return(
              <div className="author-card rounded-xl overflow-hidden border border-gray-200" key={i}>
                <div className="w-full overflow-hidden relative">
                    <Image src={item.bgImg} alt="author-bg" className="object-cover w-full h-auto" />
                </div>
                <div className="mx-6 -mt-8 pb-7 text-center relative z-2">
                    <span className="size-16 ring-2 ring-white inline-grid shrink-0 bg-neutral-200 align-middle rounded-full overflow-hidden">
                      <Image src={item.avatar} className="w-16 h-16 object-cover" alt="author-name"/> 
                    </span>
                    <div className="mt-3 space-y-1">
                      <p className="line-clamp-1 text-base font-medium">{item.name}</p>
                      <p className="line-clamp-1 text-sm text-neutral-500 dark:text-neutral-400">{item.role}</p>
                      <p className="line-clamp-1 text-sm text-neutral-500 dark:text-neutral-400">Posts:{item.totalPost}</p>
                    </div>
                </div>
              </div>
          )
        })
      }
      
    </div>
  )
}

export default AllAuthor