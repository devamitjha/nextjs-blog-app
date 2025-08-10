import React from 'react';

export default async function Author ({ params })  {
  const { slug } = await params
  return (
    <div className="pb-5">
      {slug}
    </div>
  )
}
