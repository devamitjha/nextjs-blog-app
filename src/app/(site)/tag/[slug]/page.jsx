import React from 'react';
import AllPostCard from '@/components/AllPostCard';

export default async function Category ({ params })  {
  const { slug } = await params
  return (
    <div className="pb-5">
      <AllPostCard filterData={slug} cat="tag"/>
    </div>
  )
}
