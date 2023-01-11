import Link from 'next/link'
import { useRouter } from 'next/navigation';
import {Home, PieChart, Settings } from 'react-feather'

const GlobalNav = () => {
  const router = useRouter()
  console.log(router)
  const baseClasses = 'flex gap-2 items-center gap-2 w-full text-indigo-500 text-sm p-4 rounded-full hover:bg-slate-100 hover:text-indigo-700'
  const activeClasses = baseClasses + ' bg-white/10'

  return (
    <nav className="flex items-start justify-start">
      <ul className="flex flex-col items-start justify-start p-0">
        <li className="w-full">
          <Link
            href="/"
            className={baseClasses}
            // className={router == '/' ? activeClasses : baseClasses}
          >
            <Home size={20} />
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/analytics"
            className={baseClasses}
            // className={router.pathname == '/posts' ? activeClasses : baseClasses}
          >
            <PieChart size={20} />
            Analytics
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className={baseClasses}
            // className={router.pathname == '/posts' ? activeClasses : baseClasses}
          >
            <Settings size={20} />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default GlobalNav
