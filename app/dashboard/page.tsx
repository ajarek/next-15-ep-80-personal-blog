import React, { use } from 'react'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'

import AddArticle from '@/components/AddArticle'

const Dashboard = () => {
  const session = use(auth())
  if (session?.user?.email !== 'ajarek@wp.pl') {
    redirect('/')
  }
  
  return (
    <div className='flex flex-col px-24 py-8 gap-4'>
      <h1>Dodaj Artykuł:</h1>
      <AddArticle />
    

      
    </div>
  )
}

export default Dashboard
