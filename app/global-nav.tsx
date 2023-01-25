'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Home, PieChart, Settings, Navigation } from 'react-feather'
import GlobalNavItem from './global-nav-item'

export interface GlobalNavProps {
  className: string
}

const GlobalNav = ({className}: GlobalNavProps) => {
  const segment = useSelectedLayoutSegment()

  return (
    <nav className={`w-full ${className && className}`}>
      <ul className="flex flex-col items-stretch justify-stretch">
        <li className="w-full">
          <GlobalNavItem
            title='Home'
            href='/'
            icon={<Home size={24} />}
            active={segment === null}
          />
        </li>
        <li>
          <GlobalNavItem
            title='Analytics'
            href='/analytics'
            icon={<PieChart size={24} />}
            active={segment === 'analytics'}
          />
        </li>
        <li>
          <GlobalNavItem
            title='Locations'
            href='/locations'
            icon={<Navigation size={24} />}
            active={segment === 'locations'}
          />
        </li>
        <li>
          <GlobalNavItem
            title='Settings'
            href='/settings'
            icon={<Settings size={24} />}
            active={segment === 'settings'}
          />
        </li>
      </ul>
    </nav>
  )
}

export default GlobalNav
