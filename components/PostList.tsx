import React from 'react'
import type {Article as TypeArticle} from '@/lib/models'
import {getAllArticles} from '@/lib/action'
import Link from 'next/link'
const PostList = async () => {  
  const posts =await getAllArticles() 
  return (
    <div className='flex flex-col items-start justify-start gap-4 pb-8  '>
      {posts?.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map((post:TypeArticle) => (
        <Link href={`/postId/${post._id?.toString()}`} key={post._id?.toString()} className='w-full flex flex-col items-start justify-start gap-4 border-2 border-gray-400 p-2 shadow-lg rounded-lg'>
          <h2 className='text-xl'>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.createdAt?.toLocaleString('pl-PL', {timeZone: 'Europe/Warsaw'})}</p>
          
         
          </Link>
          ))}
    </div>
  )
}

export default PostList
