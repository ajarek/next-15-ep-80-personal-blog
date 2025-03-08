import React from 'react'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { CirclePlus, MessageCircle, Newspaper } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  const session = await auth()

  // Redirect if the user is not an admin (ajarek@wp.pl)
  if (session?.user?.email !== 'ajarek@wp.pl') {
    redirect('/')
  }

  return (
    <div className='flex min-h-screen'>
      <aside className='w-48 max-lg:w-24 p-4 border-r max-lg:px-2'>
        <h2 className='text-xl font-bold mb-4'>Menu</h2>
        <nav>
          <ul className='space-y-8'>
            <Link
              href='/dashboard'
              className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center hover:border-2 border-blue-500  transition-all delay-200 '
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {' '}
                    <CirclePlus
                      size={32}
                      strokeWidth={1}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Dodaj Artykuł</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
            <Link
              href='/dashboard/articles'
              className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center hover:border-2 border-blue-500  transition-all delay-200 '
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {' '}
                    <Newspaper
                      size={32}
                      strokeWidth={1}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Artykuły</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
            <Link
              href='/dashboard/comments'
              className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center hover:border-2 border-blue-500  transition-all delay-200 '
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {' '}
                    <MessageCircle
                      size={32}
                      strokeWidth={1}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Komentarze</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </ul>
        </nav>
      </aside>

      <main className='flex-1 p-8 '>{children}</main>
    </div>
  )
}

export default DashboardLayout
