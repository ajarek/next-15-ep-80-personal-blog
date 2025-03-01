import Image from 'next/image'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'
import Logout from './Logout'
import { auth } from '@/app/api/auth/auth'

const Navbar = async () => {
  const session = await auth()
  return (
    <nav className='h-16 flex justify-between items-center px-24 max-sm:px-4 '>
      <div className='flex items-center  '>
      <Link
        href='/'
        className='flex items-center  hover:text-gray-400 transition duration-200 space-x-2'
      >
        <Image
          src= '/images/user_me.jpg'
          alt='user'
          width={40}
          height={40}
          className='w-10 h-10  object-cover rounded-full'
        />
       
      <h1 className='text-xl '>EkstraFutbol ⚽ </h1>
      </Link>
      </div>
      <div className='flex items-center space-x-8 max-sm-:space-x-2'>
        
        <Link
          href='/contact'
          className={` text-xl max-sm:text-lg  hover:text-gray-400 transition duration-200 `}
        >
          Kontakt
        </Link>
        <Logout session={session}/>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar
