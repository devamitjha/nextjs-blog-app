"use client"
import React from 'react'
import { AuthorList } from '@/lib/blogData';
import { useFilteredPosts } from "@/hooks/useFilteredPosts";
import AuthorPost from './AuthorPost';
import useSWR from "swr";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, TwitterIcon, YoutubeIcon } from 'lucide-react';
import { Button } from "@/components/ui/button"

const AuthorDetails = ({AuthorName}) => {

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR(`/api/author/${AuthorName}`, fetcher);

    const posts = useFilteredPosts({ author: data?.name });
    
    if (!data) return <p>Loading...</p>;
    if (error) return <p>Error loading author</p>;
    if (data.message) return <p>{data.message}</p>; // handle 404 or other messages

    const author = data;
    const displayName = author.name.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    const initials = displayName.split(" ").map(word => word.charAt(0)).join("");
   
  return (
    <div className="flex flex-col w-full items-center justify-center mt-8">
                    {
                       author.avatar ? <div className="relative"> 
                            <Avatar className="w-30 h-30">
                                <AvatarImage src={author.avatar} alt={author.name} />
                                <AvatarFallback>{initials}</AvatarFallback>                                                          
                            </Avatar>
                            {
                                author.verified && <span className="block w-4 h-4 rounded-full bg-green-500 absolute bottom-1 right-5 z-10"></span>
                            }  
                        </div>
                    :   <Avatar className="w-30 h-30 relative">
                            <AvatarFallback className="text-2xl font-medium">{author.name}</AvatarFallback>
                        </Avatar>
                    }    
                    <div className="text-2xl font-medium mt-4">{author.name}</div>
                    {
                        author.bio && 
                        <>
                            <p className="text-base text-gray-500">{author.role}</p>
                            <div className="text-base text-gray-500 px-4 text-center my-4">{author.bio}</div>
                            <div className="social flex gap-4 my-4">
                                <Link href={author.social.youtube}>
                                    <div className="w-12 h-12 bg-gray-200 rounded-xl flex justify-center items-center"><YoutubeIcon size={24}/></div>
                                </Link>
                                <Link href={author.social.insta}>
                                    <div className="w-12 h-12 bg-gray-200 rounded-xl flex justify-center items-center"><Instagram size={24}/></div>
                                </Link>
                                <Link href={author.social.facebook}>
                                    <div className="w-12 h-12 bg-gray-200 rounded-xl flex justify-center items-center"><Facebook size={24}/></div>
                                </Link>
                                <Link href={author.social.twitter}>
                                    <div className="w-12 h-12 bg-gray-200 rounded-xl flex justify-center items-center"><TwitterIcon size={24}/></div>
                                </Link>
                            </div>            
                        </>
                    }
                    <AuthorPost AuthorPost={posts}/>
       
    </div>
  )
}

export default AuthorDetails