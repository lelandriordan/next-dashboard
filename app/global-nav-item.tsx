import clsx from 'clsx'
import Link from 'next/link'

export interface GlobalNavItemProps {
  title: string,
  href: string,
  icon: React.ReactNode,
  active: boolean
}

const GlobalNavItem = ({title, href, icon, active}: GlobalNavItemProps) => {
  const classes = {
    base: 'flex flex-col self-stretch gap-2 uppercase text-xs font-medium items-center text-indigo-500 dark:text-indigo-400 text-sm px-2 py-4 border-l-4 border-transparent',
    hover: 'hover:bg-slate-100 hover:text-indigo-700 hover:border-indigo-300 hover:dark:bg-slate-700 hover:dark:text-indigo-300',
    active: 'bg-indigo-100 text-indigo-800 dark:text-indigo-200 dark:bg-indigo-900 border-indigo-500'
  }

  return (
    <Link
      href={href}
      title={title}
      className={clsx(
        classes.base,
        active && classes.active,
        classes.hover
      )}
    >
      {icon}
    </Link>
  )
}

export default GlobalNavItem