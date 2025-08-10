import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import blogPostImage2 from "@/assets/posts/4.jpg";

const AuthorPost = ({AuthorPost}) => {
    console.log(AuthorPost)
  return (
    <div className="w-full px-4 grid grid-cols-1 gap-4 mt-4">      
        {
            
            AuthorPost.map((item, i)=>{
                const authorSlug = item.category.toLowerCase().replace(/\s+/g, '-');
            return(
                <div className="shadow-lg bg-white rounded-xl flex justify-between items-center gap-4 p-4" key={i}>
                <div>
                    <Link href={`/category/${authorSlug}`} className="text-gray-500  text-sm">{item.category}</Link>
                    <Link href={`/post/${item.slug}`} className="block text-black mt-1 text-sm font-semibold line-clamp-2">
                        {item.title}
                    </Link>
                    <div className="post-date text-gray-500 mt-1 text-sm">30 minutes ago</div>
                </div>
                    <Link href={`/post/${item.slug}`} className="flex-shrink-0">
                        <Image src={blogPostImage2} alt={item.title} width={85} height={85}  className="object-cover rounded-md w-[85px] h-[85px]"/>             
                    </Link>
                </div>
                
            )
            })
        }
    </div>
  )
}

export default AuthorPost