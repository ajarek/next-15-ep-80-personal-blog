import React from 'react'
import posts from '@/data/posts.json'
import Link from 'next/link'
const PostList = () => {  
  return (
    <div className='flex flex-col items-start justify-start gap-4 pb-8  '>
      {posts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map((post) => (
        <Link href={`/postId/${post.id}`} key={post.id} className='w-full flex flex-col items-start justify-start gap-4 border-2 border-gray-400 p-2 shadow-lg rounded-lg'>
          <h2 className='text-xl'>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.date}</p>
          
         
          </Link>
          ))}
    </div>
  )
}

export default PostList
