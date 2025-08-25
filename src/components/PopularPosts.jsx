import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PopularPosts = ({title, data}) => {
  return (
    <div className="latest-posts mb-8">
      <div className="title-container mb-4 px-4 flex justify-between items-center gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-pretty text-neutral-950">{title}</h3>
          <Link href={"/category/all"} className="text-sm font-semibold text-blue-400">View All</Link>
      </div>       
      <div className="w-full px-4 grid grid-cols-1 gap-4">      
      {
        (data).slice(0,4).map((item)=>{
          return(
            <div className="shadow-lg bg-white rounded-xl flex justify-between items-center gap-4 p-4" key={item._id}>
              <div>
                <Link href={item.category.url} className="text-gray-500  text-sm">{item.category.name}</Link>
                <Link href={`/post/${item.slug}`} className="block text-black mt-1 text-sm font-semibold line-clamp-2">
                    {item.title}
                </Link>
                <div className="post-date text-gray-500 mt-1 text-sm">30 minutes ago</div>
              </div>
                <Link href={`/post/${item.slug}`} className="flex-shrink-0">
                   <Image src={item.postImage.url} alt={item.title} width={85} height={85}  className="object-cover rounded-md w-[85px] h-[85px]"/>             
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
