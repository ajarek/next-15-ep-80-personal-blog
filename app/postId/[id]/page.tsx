import React, { use } from 'react'
import posts from '@/data/posts.json'
import Image from 'next/image'
import AddComment from '@/components/AddComment'
import { auth } from '@/app/api/auth/auth'
import { Button } from '@/components/ui/button'
import {getAllComments} from '@/lib/action'


const PostId = ({ params }: { params: Promise<{ id: string }> }) => {
  
  const { id } = use(params)
  const post = posts.find((post) => post.id === +id)
  const session = use (auth())
  const commentsAll = use(getAllComments())
  const comments =commentsAll?.filter(comment => comment.postId === +id)

  return (
    <div className='min-h-[calc(100vh-64px)] grid grid-cols-2 max-lg:grid-cols-1 gap-4 px-24 max-sm:px-4 place-items-center pb-4'>
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
          {comments?.map((comment, index) => (
            <div
              key={index}
              className='flex flex-col items-start justify-start gap-2 px-4 '
            >
              <p className='underline capitalize'>{comment.name}</p>
              <p>{comment.content}</p>
            </div>
          ))}
        </div>
        {session?
      < AddComment name={session.user?.name || ''} postId={+id} />:
      <Button disabled  className='py-2 px-4 self-end '>Zaloguj i Dodaj Komentarz</Button>
        }
      </div>
    </div>
  )
}

export default PostId
