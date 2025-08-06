'use client'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination } from 'swiper/modules';
import { latestPostslider } from '@/lib/blogData';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge"
import clsx from 'clsx'

const CardSlider = ({title, size }) => {   
      return (
        <div className="CardSlider autoSlider mb-8">
          <div className="title-container mb-4 px-4">
              <h3 className="font-semibold tracking-tight text-pretty text-neutral-950 text-xl">{title}</h3>
          </div>
          <div className="flex items-center justify-start w-full">
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={16}
                modules={[Pagination]}
                className="slider"
              >
                {
                  (size === 'card' ? latestPostslider.slice(0, 3) : latestPostslider.slice(4, 8)).map((item, i)=>{
                      return(
                         <SwiperSlide key={i}>
                            <div 
                              className={clsx(
                                'cardAfter rounded-2xl relative overflow-hidden',
                                size === 'card' ? 'w-[280px] h-[180px]' : 'w-[160px] h-[250px]'
                              )}
                            >
                              <Link href={item.catUrl}>
                                <Image src={item.img} alt={item.title} className="w-full h-full object-cover"/>
                              </Link>
                              <div className="absolute bottom-2 z-10 w-full px-4 py-2">
                                  <Badge asChild>
                                      <Link href={item.catUrl}>{item.category}</Link>
                                  </Badge>
                                  <Link href={item.catUrl} className="block text-white mt-1 text-base font-semibold line-clamp-2">
                                      {item.title}
                                  </Link>
                              </div>
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

export default CardSlider
