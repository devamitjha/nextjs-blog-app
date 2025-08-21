import React from 'react'
import SinglePost from '@/components/SinglePost';


export default async function SinglePostPage ({ params })  {
  const { slug } = await params
  return (
    <div className="blog-post pb-12">
      <SinglePost filterData={slug}/>
    </div>
  )
}
