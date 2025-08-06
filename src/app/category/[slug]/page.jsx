import React from 'react'

export default function Category ({ params })  {
  const { slug } = params;
  return (
    <div>
      <h1 className="text-2xl font-bold">Category: {slug}</h1>
    </div>
  )
}
