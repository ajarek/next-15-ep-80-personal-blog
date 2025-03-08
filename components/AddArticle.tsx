'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Article as ArticleType } from '@/lib/models'
import { addArticle } from '@/lib/action'

const AddArticle = () => {
  return (
    <form
      action={async (formData: FormData) => {
        const commentData: ArticleType = {
          title: formData.get('title') as string,
          image: formData.get('image') as string,
          content: formData.get('content') as string,
        }
        await addArticle(commentData)
      }}
      className='w-full flex flex-col space-y-4 border-2 p-4 rounded-xl '
    >
      <div>
        <Label
          htmlFor='title'
          className='block mb-2 font-medium'
        >
          Tytuł
        </Label>
        <Input
          type='text'
          name='title'
          required
          placeholder='Tytuł'
        />
      </div>

      <div>
        <Label
          htmlFor='image'
          className='block mb-2 font-medium'
        >
          Scieżka do foto
        </Label>
        <Input
          name='image'
          required
          placeholder='Foto adres'
        />
      </div>
      <div>
        <Label
          htmlFor='content'
          className='block mb-2 font-medium'
        >
          Treść komentarza
        </Label>
        <Textarea
          name='content'
          required
          placeholder='Wpisz swój komentarz'
        />
      </div>
      <Button
        type='submit'
        className='py-2 px-4 self-end '
      >
        Dodaj Artykuł
      </Button>
    </form>
  )
}

export default AddArticle
