import React from 'react'

export default async function SinglePost ({ params })  {
  const { slug } = await params
  return (
    <div>
      <h1 className="text-2xl font-bold">SinglePost: {slug}</h1>
    </div>
  )
}
