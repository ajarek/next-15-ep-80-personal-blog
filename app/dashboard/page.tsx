

import React, {use} from 'react'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import {getAllComments} from '@/lib/action'
import ButtonDelete from '@/components/ButtonDelete'
import AddArticle from '@/components/AddArticle'


const Dashboard =  () => {
  const session = use(auth())
  if(session?.user?.email!=='ajarek@wp.pl'){
    redirect('/')  
  }
  const commentsAll = use(getAllComments())
  return (
    <div className='flex flex-col px-24 pb-8'>
      {commentsAll?.map((comment, index) => (
            <div
              key={comment._id}
              className='w-full flex  items-start justify-start gap-4 px-4 text-xl'
             > 
                <p>{index + 1}.</p>
               <p>Id: {comment.postId}</p>
              <p className='underline capitalize'>{comment.name}</p>
              <p>{comment.content}</p>
             <ButtonDelete id={comment._id.toString()}/>
            </div>

          ))}

      <AddArticle/>

    </div>
  )
}

export default Dashboard