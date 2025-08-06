import React from 'react'
import { popularPosts } from '@/lib/blogData'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from './ui/badge'

const PopularPosts = ({title}) => {
  return (
    <div className="latest-posts mb-8">
      <div className="title-container mb-4 px-4 flex justify-between items-center gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-pretty text-neutral-950">{title}</h3>
          <p className="text-sm font-semibold text-blue-400">View All</p>
      </div>      
      <div className="w-full px-4 grid grid-cols-1 gap-4">      
      {
        (popularPosts).slice(0,4).map((item)=>{
          return(
            <div className="shadow-lg bg-white rounded-xl flex justify-between items-center gap-4 p-4 ">
              <div>
                <Link href={item.catUrl} className="text-gray-500  text-sm">{item.category}</Link>
                <Link href={item.catUrl} className="block text-black mt-1 text-sm font-semibold line-clamp-2">
                    {item.title}
                </Link>
                <div class="post-date text-gray-500 mt-1 text-sm">30 minutes ago</div>
              </div>
                <Link href={item.catUrl} className="flex-shrink-0">
                   <Image src={item.img} alt={item.title} width={85} height={85}  className="object-cover rounded-md w-[85px] h-[85px]"/>             
                </Link>
            </div>
            
          )
        })
      }
      </div>
    </div>

  )
}

export default PopularPosts
