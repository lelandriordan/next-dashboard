import clsx from 'clsx'
import Link from 'next/link'
import GlobalNav from './global-nav'
import { Menu, X } from 'react-feather'
import ColorModeToggle from '../components/color-mode-toggle'

export interface HeaderProps {
  className?: string
}

const Header = ({className}: HeaderProps) => {

  const classes = {
    base: 'flex items-center h-auto justify-between gap-4 bg-white shadow-md',
    responsive: 'md:justify-start md:flex-col md:items-start md:py-2 md:rounded-r-lg',
    colorMode: 'dark:bg-slate-800'
  }

  return (
    // <div className={classes}>
    <div className={clsx(
      classes.base,
      classes.responsive,
      classes.colorMode,
      className && className
    )}>
      <Link href="/" className="block mx-2 text-xl rounded-full p-4 bg-indigo-900 text-indigo-100">ND</Link>
      
      <GlobalNav className="hidden md:block" />

      <ColorModeToggle className="self-center mt-auto mb-4" />
    </div>
  )
}

export default Header