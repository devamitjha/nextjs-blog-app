"use client"
import React from 'react'
import { AuthorList } from '@/lib/blogData';
import { useFilteredPosts } from "@/hooks/useFilteredPosts";
import AuthorPost from './AuthorPost';
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
    const displayName = AuthorName.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");//Convert name like Amit Jha
    const AuthorBio = AuthorList.filter((item) => item.slug === AuthorName)[0]; // For Author Bio
    const posts = useFilteredPosts({ author: displayName }); // Aor Author Posts
    const initials = displayName.split(" ").map(word => word.charAt(0)).join("");  //Initial like AJ
    console.log(AuthorBio);
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center mt-8">
        {
            AuthorBio ? <div className="relative"> 
                            <Avatar className="w-30 h-30">
                                <AvatarImage src={AuthorBio.avatar.src} alt={AuthorBio.name} />
                                <AvatarFallback>{initials}</AvatarFallback>                                                          
                            </Avatar>
                            {
                                AuthorBio.verified && <span className="block w-4 h-4 rounded-full bg-green-500 absolute bottom-1 right-5 z-10"></span>
                            }  
                        </div>
                    :   <Avatar className="w-30 h-30 relative">
                            <AvatarFallback className="text-2xl font-medium">{initials}</AvatarFallback>
                        </Avatar>
        }
        
        <div className="text-2xl font-medium mt-4">{displayName}</div>
        {
            AuthorBio && <>
                        <p className="text-base text-gray-500">{AuthorBio.role}</p>
                        <div className="text-base text-gray-500 px-4 text-center my-4">{AuthorBio.bio}</div>
                        <div className="social flex gap-4 my-4">
                            <Link href={AuthorBio.social[0].youtube}>
                                <div className="w-12 h-12 bg-gray-200 rounded-xl flex justify-center items-center"><YoutubeIcon size={24}/></div>
                            </Link>
                            <Link href={AuthorBio.social[0].insta}>
                                <div className="w-12 h-12 bg-gray-200 rounded-xl flex justify-center items-center"><Instagram size={24}/></div>
                            </Link>
                            <Link href={AuthorBio.social[0].facebook}>
                                <div className="w-12 h-12 bg-gray-200 rounded-xl flex justify-center items-center"><Facebook size={24}/></div>
                            </Link>
                            <Link href={AuthorBio.social[0].twitter}>
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