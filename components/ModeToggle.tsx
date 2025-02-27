'use client'

import { FaRegSun, FaMoon } from 'react-icons/fa6'
import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {theme === 'light' ? (
          <FaMoon  size={24} onClick={() => setTheme('dark')} />
        ) : (
          <FaRegSun  size={24} onClick={() => setTheme('light')} />
        )}
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
