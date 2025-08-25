'use client'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination } from 'swiper/modules';
import { trendingItem } from '@/lib/blogData';
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json())
const HorizontalSlider = ({title}) => {    
   const { data, error, isLoading } = useSWR("/api/categories", fetcher);
    if (error) return <div>Failed to load post ❌</div>;
    if (isLoading) return <div>Loading post...</div>;
    if (!data) return <div>No category found</div>;
    const cat = data;
      return (
        <div className="horizontalSlider autoSlider mb-8">
          <div className="title-container mb-4 px-4">
              <h3 className="text-xl font-semibold tracking-tight text-pretty text-neutral-950">{title}</h3>
          </div>
          <div className="flex items-center justify-start w-full">
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={12}
                modules={[Pagination]}
                className="slider"
              >
                {
                  cat.map((item)=>{
                      return(
                         <SwiperSlide key={item._id}>
                          <div className="px-4 py-2 bg-gray-200 rounded-full">
                              <Link href={item.url} className="text-base text-black">{item.name}</Link>
                          </div>
                        </SwiperSlide>
                      )
                  })
                }                 
              </Swiper>
          </div>
        </div>
      );
    }

export default HorizontalSlider
