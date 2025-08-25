'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { switchSheet, setSheetAfterDelay } from '@/store/slices/sheetSlice'
import useSWR from "swr"
import { setCategories, setError, setLoading } from "@/store/slices/categorySlice"

const AllCategories = ({ title, pageLocation }) => {
  const fetcher = (url) => fetch(url).then((res) => res.json())
  
  const { data, error, isLoading } = useSWR("/api/categories", fetcher, {
    dedupingInterval: 24 * 60 * 60 * 1000, // 24 hours
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    keepPreviousData: true,
  })

  const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.category)

  // ✅ Sync SWR with Redux
  useEffect(() => {
    if (isLoading) dispatch(setLoading(true))
    if (error) dispatch(setError(error))
    if (data) dispatch(setCategories(data))
  }, [data, error, isLoading, dispatch])

  // ✅ Use categories from Redux, not raw SWR
  const displayedCategories = pageLocation
    ? categories?.slice(0, 6)
    : categories || []

  // ✅ Open sheet with animation delay
  const openSheet = (sheetName) => {
    dispatch(switchSheet()) // close current
    setTimeout(() => {
      dispatch(setSheetAfterDelay(sheetName)) // open next after animation
    }, 200)
  }

  // ✅ Close sheet
  const closeSheet = () => {
    dispatch(switchSheet()) // sets activeSheet to null
  }

  return (
    <div className="latest-posts mb-8">
      {title && (
        <div className="title-container mb-4 px-4 flex justify-between items-center gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-pretty text-neutral-950">{title}</h3>
          <p
            className="text-sm font-semibold text-blue-400 cursor-pointer"
            onClick={() => openSheet('category')}
          >
            View All
          </p>
        </div>
      )}

      <div className="w-full px-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        {displayedCategories?.map((item, i) => (
          <div className="relative cardAfter overflow-hidden rounded-md" key={i}>
            <Link href={item.url} className="relative" onClick={closeSheet}>
              <div className="relative w-full h-[100px] md:h-[150px]">
                <Image
                  src={item.catImage}
                  alt={item.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p className="text-white absolute top-1/2 left-1/2 transform -translate-1/2 z-20 uppercase text-[12px] font-semibold w-full text-center px-2">
                {item.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllCategories
