import React, { use } from 'react'
import { getAllArticles } from '@/lib/action'
import ButtonDelete from '@/components/ButtonDelete'
import Image from 'next/image'
import { deleteArticleId } from "@/lib/action"

const Articles = () => {
  const articlesAll = use(getAllArticles())
  return (
    <div className='flex flex-col gap-4 '>
      <h1>Artykuły:</h1>
      {articlesAll?.map((article, index) => (
        <div
          key={article._id.toString()}
          className='w-full flex flex-col  gap-2 text-xl border-2 rounded-xl p-2'
        >
          <p>{index + 1}.</p>
          <p>Id: {article._id.toString()}</p>
          <div className='relative w-[100px] h-[75px] flex  items-center justify-center rounded-sm overflow-hidden shadow-lg'>
            <Image
              src={article?.image || ''}
              alt='article'
              fill
              sizes='(max-width: 768px) 100vw, 33vw'
              className='object-cover'
              priority
            />
          </div>
          <p className='underline capitalize'>{article.title}</p>
          <p>{article.content}</p>
          <p>
            {article.createdAt?.toLocaleString('sv-SV', {
              timeZone: 'Europe/Warsaw',
            })}
          </p>
          <div className='self-end'>
            <ButtonDelete id={article._id.toString()} deleteElementId={deleteArticleId} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Articles
