"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import BlogImage from "@/assets/posts/sample.webp";
import AuthorAvatar from "@/assets/posts/avatar.webp";
import { useFilteredPosts } from "@/hooks/useFilteredPosts";
import SampleImage from "@/assets/categories/sample.webp"
import { Badge } from "./ui/badge";
import { StickyNote } from 'lucide-react';

const AllPostCard = ({ filterData, cat }) => {
    const posts = useFilteredPosts({
        slug: undefined,
        category: cat === "category" ? filterData : undefined,
        tag: cat === "tag" ? filterData : undefined,
        author: undefined
    });
    return (
         <div className="p-4 xl:p-0">
         <div className="w-full bg-white rounded-2xl shadow-lg mb-6 p-6 flex flex-col md:flex-row lg:items-center md:justify-between">
            <div className="placeholder w-[130px] h-[130px] relative rotate-12 shadow-2xl rounded-2xl overflow-hidden ring-4 ring-white inline-grid bg-neutral-200 align-middle mb-8 ml-3 md:ml-4">
                <Image src={SampleImage} alt={filterData} fill priority className="object-cover aspect-1/1" />
            </div>
            <div className="flex items-start justify-start flex-col md:flex-col md:w-[calc(100%_-_190px)]">
                <Badge className="bg-blue-50 text-blue-700">{cat === "tag" ? "tag" : "category"}</Badge>
                <h1 className="mt-2 text-2xl font-semibold lg:text-3xl capitalize my-4 text-neutral-600">
                    {cat === "tag" ? `#${filterData}` : filterData }
                </h1> 
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Stay updated with the latest technology news, trends, and innovations. Explore the world of AI, blockchain, and the future of technology.</p>
                <p className="mt-2  flex items-center gap-x-1 text-sm">
                    <StickyNote size={14} />
                    <span>{posts.length} articles</span>
                </p>
            </div>
         </div>
                
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {posts?.map((post) => {
                    const authorSlug = post.author.toLowerCase().replace(/\s+/g, '-');
                    return(
                        <article key={post.slug} className="border rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden">
                            <Link href={`/post/${post.slug}`} className="flex post-thumbnail w-full h-[280px] md:h-[250px] 2xl:h-[350px] relative">
                                <Image src={BlogImage} alt={post.title} fill priority className="object-cover"/>
                            </Link>
                            <div className="post-into p-4 flex flex-col gap-4">
                                <div className="post-author flex justify-start items-center gap-2">
                                    <Link href={`/author/${authorSlug}`} className="w-[30px] h-[30px] relative rounded-full overflow-hidden">
                                        <Image src={AuthorAvatar} fill priority className="object-cover" alt={post.author}/>
                                    </Link>
                                    <Link href={`/author/${authorSlug}`}>{post.author}</Link>
                                    <p>•</p>
                                    <p>{new Date(post.date).toLocaleDateString(undefined, {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                        })}
                                    </p>
                                </div>
                                <Link href={`/post/${post.slug}`} className="line-clamp-2 block text-base font-semibold text-neutral-900 dark:text-neutral-100">{post.title}</Link>
                                <div className="mt-auto flex flex-wrap gap-x-2 gap-y-1">
                                    <button className="post-card-like-btn group flex h-8 items-center rounded-full ps-2 pe-3 text-xs leading-none transition-colors bg-neutral-50 hover:bg-rose-50 hover:text-rose-600 dark:bg-white/10 dark:hover:bg-white/10 dark:hover:text-rose-400" title="Like"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path></svg><span className="ms-1">{post.likes}</span></button>             
                                    {post.comment.length >=1 && 
                                        <Link className="post-card-comment-btn flex h-8 min-w-16 items-center rounded-full bg-neutral-50 ps-2 pe-3 text-xs transition-colors hover:bg-teal-50 hover:text-teal-600 dark:bg-white/10 dark:hover:bg-white/10 dark:hover:text-teal-500" title="Comments" data-headlessui-state="" href={`/post/${post.slug}#comments`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" color="currentColor" className=""><path d="M8 13.5H16M8 8.5H12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
                                        <span className="ms-2">{post.comment.length}</span>
                                    </Link> 
                                    }
                                    <div className="post-card-save-btn flex items-center gap-x-2 text-xs ms-auto">
                                        <span>2 min read</span>
                                        <button className="relative flex size-8 items-center justify-center rounded-full bg-neutral-50 transition-colors duration-300 hover:bg-neutral-100 dark:bg-white/10 dark:hover:bg-white/20" title="Save to reading list" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.75" stroke="currentColor"><path d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    );
};

export default AllPostCard;
