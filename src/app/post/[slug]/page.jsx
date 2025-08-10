import { Badge } from '@/components/ui/badge'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import BlogPostImge from "@/assets/posts/1.jpg"
import Image from 'next/image'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Link from 'next/link'

import { BadgeCheck, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button"


export default async function SinglePost ({ params })  {
  const { slug } = await params
  return (
    <div className="blog-post pb-8">
      <div className="flex gap-4 flex-row mt-4 px-4">        
        <Badge className="bg-blue-50 text-blue-700">Technology</Badge>
        <Badge className="bg-green-50 text-green-700">Gaming</Badge>
      </div>
      <div className="px-4">
        <h1 className="max-w-4xl text-3xl/tight font-semibold tracking-tight text-pretty md:text-4xl/tight lg:text-[2.5rem]/tight my-5">Where the Internet Lives: From Trauma to Triumph Oval</h1>
        <p className="text-base/relaxed text-neutral-600 md:text-lg/relaxed dark:text-neutral-400">Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.</p>
        <Separator className="mt-4 mb-6" />
        <div className="author-card flex justify-start items-center gap-2 mb-2">
          <Avatar className="w-15 h-15">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>Aj</AvatarFallback>
          </Avatar>
          <div className="ms-3">
              <p className="block font-semibold">John Doe</p>
              <div className="mt-1.5 flex items-center gap-x-2 text-xs">
                  <span><time dateTime="2025-06-10">June 10, 2025</time></span>
                  <span>•</span><span>2 min read</span>
              </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-x-2.5 gap-y-2 mb-6">
          <button className="post-card-like-btn group flex h-8 items-center rounded-full ps-2 pe-3 text-xs leading-none transition-colors bg-neutral-50 hover:bg-rose-50 hover:text-rose-600 dark:bg-white/10 dark:hover:bg-white/10 dark:hover:text-rose-400" title="Like"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path></svg><span className="ms-1">3.0k</span></button>
          
          <a className="post-card-comment-btn flex h-8 min-w-16 items-center rounded-full bg-neutral-50 ps-2 pe-3 text-xs transition-colors hover:bg-teal-50 hover:text-teal-600 dark:bg-white/10 dark:hover:bg-white/10 dark:hover:text-teal-500" title="Comments" data-headlessui-state="" href="/post/where-the-internet-lives-from-trauma-to-triumph-oval#comments"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" color="currentColor" className=""><path d="M8 13.5H16M8 8.5H12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg><span className="ms-2">11</span>
          </a>
          
          <p className="font-light text-neutral-400 sm:mx-1">/</p>
          
          <button className="relative flex size-8 items-center justify-center rounded-full bg-neutral-50 transition-colors duration-300 hover:bg-neutral-100 dark:bg-white/10 dark:hover:bg-white/20" title="Save to reading list" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.75" stroke="currentColor"><path d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75"></path></svg>
          </button>    
        </div>
        <div className="flex gap-4 flex-col text-md">
          <div className="postImage w-full h-[250px] relative rounded-2xl overflow-hidden">
            <Image src={BlogPostImge} alt="Blog Post" fill priority className="object-cover"/>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor distinctio veritatis sapiente, minima corrupti dolores necessitatibus suscipit accusantium dignissimos culpa cumque.</p>
          <p>It is a long established fact that a <strong>reader</strong> will be distracted by the readable content of a page when looking at its <strong>layout</strong>. The point of using Lorem Ipsum is that it has a more-or-less normal <a href="/#" target="_blank" rel="noopener noreferrer">distribution of letters.</a> </p>
          <p>I think most people are going to use <a href="https://highlightjs.org/">highlight.js</a> or <a href="https://prismjs.com/">Prism</a> or something if they want to style their code blocks but it wouldn't hurt to make them look <em>okay</em> out of the box, even with no syntax highlighting.</p>
        </div>
        <div className="mx-auto flex flex-wrap my-6">
            <Link className="nc-tag inline-block rounded-lg border bg-white px-3 py-2 text-sm md:px-4 md:py-2.5 dark:bg-white/5 me-2 mb-2" href="/tag/technology">#Technology</Link>
            <Link className="nc-tag inline-block rounded-lg border bg-white px-3 py-2 text-sm md:px-4 md:py-2.5 dark:bg-white/5 me-2 mb-2" data-headlessui-state="" href="/tag/travel">#Travel</Link>
            <Link className="nc-tag inline-block rounded-lg border bg-white px-3 py-2 text-sm md:px-4 md:py-2.5 dark:bg-white/5 me-2 mb-2" data-headlessui-state="" href="/tag/food">#Food</Link>
            <Link className="nc-tag inline-block rounded-lg border bg-white px-3 py-2 text-sm md:px-4 md:py-2.5 dark:bg-white/5 me-2 mb-2" data-headlessui-state="" href="/tag/health">#Health</Link>
        </div>
        <div className="author-section my-6">
          <div className="bg-gray-200 rounded-2xl flex justify-between items-center p-4">
            <div className="avatar flex justify-start items-center gap-4">
              <Avatar className="w-15 h-15">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>Aj</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="flex gap-2 items-center text-base font-semibold">Amit Jha  <BadgeCheck size={16} className="text-blue-600"/></h3>
                <p className="text-sm text-gray-500">Developer</p>
              </div>
            </div>            
            <Button  size="lg">
                <Plus /> Follow
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
