import React from 'react';
import { auth } from '@/app/api/auth/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  const session = await auth();

  // Redirect if the user is not an admin (ajarek@wp.pl)
  if (session?.user?.email !== 'ajarek@wp.pl') {
    redirect('/');
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64  p-4 border-r">
        <h2 className="text-xl font-bold mb-4">Dashboard Menu</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard" className='hover:underline'>
               Dodaj Artykuł
              </Link>
            </li>
            {/* Add more dashboard links here */}
            <li>
              <Link href="/dashboard/articles" className='hover:underline'>
               Artykuły
              </Link>
            </li>
            <li>
              <Link href="/dashboard/comments" className='hover:underline'>
                Komentarze
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 ">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
