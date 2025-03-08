'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import type { Comment as CommentType } from '@/lib/models'
import { addComment } from '@/lib/action'
import type { Comment as TypeComment } from '@/lib/models'

const AddComment = ({ postId, name }: TypeComment) => {
  const [add, setAdd] = useState(false)
  return (
    <div className='w-full p-4 border rounded-lg shadow-md flex flex-col'>
      {add ? (
        <form
          action={async (formData: FormData) => {
            const commentData: CommentType = {
              name: name,
              postId: postId,
              content: formData.get('content') as string,
            }
            await addComment(commentData)
            setAdd(false)
          }}
          className='flex flex-col space-y-4'
        >
          <input
            type='hidden'
            defaultValue={postId}
            name='postId'
          />
          <div>
            <label
              htmlFor='name'
              className='block mb-2 font-medium'
            >
              Nazwa
            </label>
            <Input
              type='text'
              name='name'
              defaultValue={name}
              required
              placeholder='Wpisz swoje imię'
            />
          </div>
          <div>
            <label
              htmlFor='content'
              className='block mb-2 font-medium'
            >
              Treść komentarza
            </label>
            <Textarea
              name='content'
              required
              placeholder='Wpisz swój komentarz'
            />
          </div>
          <Button
            type='submit'
            className='py-2 px-4 self-end '
            aria-label='Dodaj Komentarz'
          >
            Dodaj Komentarz
          </Button>
        </form>
      ) : (
        <Button
          onClick={() => setAdd(true)}
          className='py-2 px-4 self-end '
          aria-label='Dodaj Komentarz'
        >
          Dodaj Komentarz
        </Button>
      )}
    </div>
  )
}

export default AddComment
