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

const CardSlider = ({title, size, data }) => {  
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
                  data?.map((item, i)=>{
                      return(
                         <SwiperSlide key={i}>
                            <div 
                              className={clsx(
                                'cardAfter rounded-2xl relative overflow-hidden',
                                size === 'card' ? 'w-[280px] h-[180px]' : 'w-[160px] h-[250px]'
                              )}
                            >
                              <Link href={`/post/${item.slug}`} className="block w-full h-full relative">
                                <Image src={item.postImage.url} alt={item.title} fill className="w-full h-full object-cover"/>
                              </Link>
                              <div className="absolute bottom-2 z-10 w-full px-4 py-2">
                                  <Badge asChild>
                                      <Link href={item.category.url} className="text-[10px] lg:text-sm">{item.category.name}</Link>
                                  </Badge>
                                  <Link href={`/post/${item.slug}`} className="block text-white mt-1 text-sm lg:text-base font-semibold">
                                      {item.title.slice(0, 40)}{item.title.length > 40 ? '...' : ''}
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
