import React from 'react';
import AuthorDetails from '@/components/AuthorDetails';

export default async function Author ({ params })  {
  const { slug } = await params
  return (
    <div className="pb-5 mb-25">
      <AuthorDetails AuthorName={slug}/>      
    </div>
  )
}
