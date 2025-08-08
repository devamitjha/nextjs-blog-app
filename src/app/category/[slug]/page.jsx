import React from 'react';
import Counter from '@/components/Counter';

export default async function Category ({ params })  {
  const { slug } = await params
  return (
    <div>
      <h1 className="text-2xl font-bold">Category: {slug}</h1>
      <Counter/>
    </div>
  )
}
