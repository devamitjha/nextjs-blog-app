'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { Plus } from 'lucide-react';
import { useDispatch } from 'react-redux'
import { switchSheet, setSheetAfterDelay } from '@/store/slices/sheetSlice'
import AllAuthor from './AllAuthor'
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const PopularAuthor = ({title, dataTitle}) => { 
    const dispatch = useDispatch()
     const { data, error, isLoading } = useSWR("/api/author", fetcher);
        if (error) return <div>Failed to load post ❌</div>;
        if (isLoading) return <div>Loading post...</div>;
        if (!data) return <div>No category found</div>;
        const allAuthorList = data;
        
    const openSheet = (sheetName) => {
        dispatch(switchSheet())
        setTimeout(() => {
        dispatch(setSheetAfterDelay(sheetName)) 
        }, 200)
    }   
    const closeSheet = () => {
        dispatch(switchSheet()) 
    }
  return (
    <div className="latest-posts mb-8">
        {dataTitle === 'popular' && (
           <>
            <div className="title-container mb-4 px-4 flex justify-between items-center gap-4">
                <h3 className="text-xl font-semibold tracking-tight text-pretty text-neutral-950">{title}</h3>
                <p className="text-sm font-semibold text-blue-400" onClick={() => openSheet('allAuthor')}>View All</p>
            </div>      
            <div className="w-full px-4 grid grid-cols-1 gap-4">      
                {
                    (allAuthorList).slice(0, 4).map((author)=>{
                        return(
                            <div className="bg-white rounded-xl flex justify-start items-center gap-4 w-full" key={author._id}>
                                <Link href={`/author/${author.slug}`} className="flex-shrink-0">
                                    <Image src={author.avatar} alt={author.name} width={50} height={50}  className="object-cover rounded-full w-[50px] h-[50px]"/>             
                                </Link>
                                <div className="flex w-[calc(100%_-_70px)] justify-between items-center gap-4 border-b-1 border-gray-200 py-2">
                                    <Link href={`/author/${author.slug}`} className="block">
                                        <p className="text-black mt-1 text-sm font-semibold line-clamp-1">{author.name}</p>
                                        <div className="post-date text-gray-500 mt-1 text-sm">{author.role}</div>
                                    </Link>
                                    <Button size="sm" className="self-end">
                                        <Plus />Follow
                                    </Button>
                                </div>
                            </div>       
                        )
                    })
                }
            </div>
           </>
        )}
        {dataTitle === 'AllAuthor' && (
            <AllAuthor authorList={allAuthorList}/>
        )}
      

    </div>

  )
}

export default PopularAuthor
