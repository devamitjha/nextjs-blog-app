import React from 'react'
import { popularPosts } from '@/lib/blogData'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Plus } from 'lucide-react';

const PopularAuthor = ({title}) => {
  return (
    <div className="latest-posts mb-8">
      <div className="title-container mb-4 px-4 flex justify-between items-center gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-pretty text-neutral-950">{title}</h3>
          <p className="text-sm font-semibold text-blue-400">View All</p>
      </div>      
      <div className="w-full px-4 grid grid-cols-1 gap-4">      
        {
            (popularPosts).slice(2,7).map((item, i)=>{
                return(
                    <>
                        <div className="bg-white rounded-xl flex justify-start items-center gap-4" key={i}>
                            <Link href={item.catUrl} className="flex-shrink-0">
                                <Image src={item.img} alt={item.title} width={50} height={50}  className="object-cover rounded-full w-[50px] h-[50px]"/>             
                            </Link>
                            <div className="flex justify-between items-center gap-4 border-b-1 border-gray-200 py-2">
                                <Link href={item.catUrl} className="block">
                                    <p className="text-black mt-1 text-sm font-semibold line-clamp-1">{item.title}</p>
                                    <div className="post-date text-gray-500 mt-1 text-sm">30 minutes ago</div>
                                </Link>
                                <Button size="sm">
                                    <Plus />Follow
                                </Button>
                            </div>
                        </div>   
                        
                    </>             
                )
            })
        }
      </div>
    </div>

  )
}

export default PopularAuthor
