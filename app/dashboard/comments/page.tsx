import React, { use } from 'react'
import { getAllComments } from '@/lib/action'
import ButtonDelete from '@/components/ButtonDelete'
import { deleteCommentId } from '@/lib/action'

const Comments = () => {
  const commentsAll = use(getAllComments())
  return (
    <div className='flex flex-col gap-4 w-full '>
      <h1>Komentarze:</h1>
      {commentsAll?.map((comment, index) => (
        <div
          key={comment._id}
          className='w-full flex flex-wrap items-center justify-start gap-4  text-xl border-2 shadow-xl p-2'
        >
          <p>{index + 1}.</p>
          <p>Id: {comment.postId}</p>
          <p className='underline capitalize'>{comment.name}</p>
          <p>{comment.content}</p>
          <ButtonDelete
            id={comment._id.toString()}
            deleteElementId={deleteCommentId}
          />
        </div>
      ))}
    </div>
  )
}

export default Comments
//67c76412d09f48b1f4b25602
