"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import blogPostImage2 from "@/assets/posts/4.jpg";

const AuthorPost = ({AuthorPost}) => {
    console.log(AuthorPost)
    const totalViews = AuthorPost.reduce((sum, item) => sum + item.views, 0);
    const totalLikes = AuthorPost.reduce((sum, item) => sum + item.likes, 0);
  return (
    <div className="w-full px-4 grid grid-cols-1 gap-4 mt-4">      
        <div className="flex justify-center items-center gap-6">
            <div className="flex items-center flex-col">
                <p className="font-semibold">{AuthorPost.length}</p>
                <p className="text-gray-500">Posts</p>
            </div>
            <Separator orientation="vertical" />
            <div className="flex items-center flex-col">
                <p className="font-semibold">{totalViews}</p>
                <p className="text-gray-500">Total Views</p>
            </div>
            <Separator orientation="vertical" />
            <div className="flex items-center flex-col">
                <p className="font-semibold">{totalLikes}</p>
                <p className="text-gray-500">Total Likes</p>
            </div>
        </div>
        <div className="text-xl mt-4 flex justify-between items-center gap-4">
            <div className="flex items-center px-4 text-xs border rounded-full border-gray-200">               
                <button className="relative flex size-8 items-center justify-start rounded-full bg-neutral-50 transition-colors duration-300 hover:bg-neutral-100 dark:bg-white/10 dark:hover:bg-white/20" title="Save to reading list" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" color="currentColor"><path d="M3 17.9808V12.7075C3 9.07416 3 7.25748 4.09835 6.12874C5.1967 5 6.96447 5 10.5 5C14.0355 5 15.8033 5 16.9017 6.12874C18 7.25748 18 9.07416 18 12.7075V17.9808C18 20.2867 18 21.4396 17.2755 21.8523C15.8724 22.6514 13.2405 19.9852 11.9906 19.1824C11.2657 18.7168 10.9033 18.484 10.5 18.484C10.0967 18.484 9.73425 18.7168 9.00938 19.1824C7.7595 19.9852 5.12763 22.6514 3.72454 21.8523C3 21.4396 3 20.2867 3 17.9808Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M9 2H11C15.714 2 18.0711 2 19.5355 3.46447C21 4.92893 21 7.28595 21 12V18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                </button>
                 <span className="text-md">Saved</span>
            </div>
            <div>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Most recent" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="Most recent">Most recent</SelectItem>
                            <SelectItem value="Most appreciated">Most appreciated</SelectItem>
                            <SelectItem value="Most discussed">Most discussed</SelectItem>
                            <SelectItem value="Most viewed">Most viewed</SelectItem>
                            <SelectItem value="Most liked">Most liked</SelectItem>
                            <SelectItem value="Curated by admin">Curated by admin</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
        {
            
            AuthorPost.map((item, i)=>{
                const authorSlug = item.category.slug.toLowerCase().replace(/\s+/g, '-');
            return(
                <div className="shadow-lg bg-white rounded-xl flex justify-between items-center gap-4 p-4" key={i}>
                <div>
                    <Link href={`/category/${authorSlug}`} className="text-gray-500  text-sm">{item.category.name}</Link>
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