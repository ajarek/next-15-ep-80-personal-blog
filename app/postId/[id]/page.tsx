import React, { use } from 'react'
import posts from '@/data/posts.json'
import Image from 'next/image'

const PostId = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params)
  const post = posts.find((post) => post.id === +id)

  return (
    <div className='min-h-[calc(100vh-64px)] grid grid-cols-2 gap-4 px-24 place-items-center'>
      <div className='relative w-[400px] h-[300px] flex  items-center justify-center rounded-lg overflow-hidden shadow-lg'>
        <Image
          src={post?.image || ''}
          alt='post'
          fill
          sizes='(max-width: 768px) 100vw, 33vw'
          className='object-cover'
          priority
        />
      </div>
      <div className='flex flex-col items-start justify-start gap-4'>
        <h1 className='text-xl'>{post?.title}</h1>
        <p>{post?.content}</p>
        <p>{post?.date}</p>
        <div>
          {post?.comments.map((comment, index) => (
            <div
              key={index}
              className='flex flex-col items-start justify-start gap-2 px-4 '
            >
              <p className='underline'>{comment.user}</p>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostId
