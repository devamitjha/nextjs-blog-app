'use client'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination } from 'swiper/modules';
import { trendingItem } from '@/lib/blogData';

const HorizontalSlider = ({title}) => {   
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
                  trendingItem.map((item, i)=>{
                      return(
                         <SwiperSlide key={i}>
                          <div className="px-4 py-2 bg-gray-200 rounded-full">
                              <Link href={item.url} className="text-base text-black">{item.title}</Link>
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
