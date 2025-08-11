import React from 'react'
import HorizontalSlider from '@/components/HorizontalSlider'
import PopularPosts from '@/components/PopularPosts'
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

export default function SearchPage (){
  return (
    <div className="search">
        <div className="px-4 mb-4">
          <h3 className="text-xl font-semibold tracking-tight text-pretty text-neutral-950 mb-4">Search</h3>
          <div className="search-input relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2"/>
            <Input type="search" placeholder="search" className="ps-10 h-12"/>
          </div>
        </div>
        <div className="surch-suggestion px-4 mb-4">
          <h3 className="text-xl font-semibold tracking-tight text-pretty text-neutral-950 mb-4">History</h3>
          <div className="flex flex-wrap gap-4 text-blue-500">
            <span className="flex gap-2 text-sm items-center border-b border-gray-300 pb-2"> <Search size={16}/> Us Ellection</span>
            <span className="flex gap-2 text-sm items-center border-b border-gray-300 pb-2"> <Search size={16}/> NBA Finals</span>
            <span className="flex gap-2 text-sm items-center border-b border-gray-300 pb-2"> <Search size={16}/> Sink Routine</span>
            <span className="flex gap-2 text-sm items-center border-b border-gray-300 pb-2"> <Search size={16}/> Vegan Meals</span>
            <span className="flex gap-2 text-sm items-center border-b border-gray-300 pb-2"> <Search size={16}/> SpaceX Rocket</span>
          </div>
        </div>
       <HorizontalSlider title="Categories" subTitle="Explore the most viewed articles"/>
       <PopularPosts title="Suggested" subTitle="Explore the altest articles"/>
    </div>
  )
}
