import Image from 'next/image'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'


const Navbar = () => {
  
  return (
    <nav className='h-16 flex justify-between items-center px-24 max-sm:px-4 '>
      <div className='flex items-center space-x-2 '>
      <Link
        href='/signout'
        className='flex items-center  hover:text-gray-500 transition duration-200'
      >
        <Image
          src= '/images/user_me.jpg'
          alt='user'
          width={40}
          height={40}
          className='w-10 h-10  object-cover rounded-full'
        />
       
      </Link>
      <h1 className='text-xl '>EkstraFutbol ⚽ </h1>
      </div>
      <div className='flex items-center space-x-8 max-sm-:space-x-2'>
        <Link
          href='/'
          className={` text-xl max-sm:text-lg  hover:text-gray-500 transition duration-200 `}
        >
          Główna
        </Link>
        <Link
          href='/contact'
          className={` text-xl max-sm:text-lg  hover:text-gray-500 transition duration-200 `}
        >
          Kontakt
        </Link>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar
