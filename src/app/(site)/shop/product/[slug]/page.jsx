import React from 'react';

export default async function Product ({ params })  {
  const { slug } = await params
  return (
    <div className="pb-5 mb-25">
      {slug}
    </div>
  )
}
