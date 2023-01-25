'use client'
import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'react-feather'

export interface ColorModeToggleProps {
  className: string
}

const ColorModeToggle = ({className}: ColorModeToggleProps) => {
  const [colorMode, setColorMode] = useState<string>()

  useEffect(() => {
    const theme = localStorage.theme
    if (theme) {
      setTheme(theme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  const toggleTheme = () => {
    const currentTheme = window.localStorage.theme

    if ((!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark')
    } else if (!currentTheme) {
      setTheme('light')
    } else if (currentTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const setTheme = (theme:string) => {
    if (theme === 'dark') {
      setColorMode('dark')
      document.documentElement.classList.add('dark')
      window.localStorage.theme = 'dark'
    } else {
      setColorMode('light')
      document.documentElement.classList.remove('dark')
      window.localStorage.theme = 'light'
    }
  }

  if (colorMode === 'dark') {
    return (
      <Sun
        onClick={toggleTheme}
        size={24}
        className={clsx(
          'text-slate-600 hover:text-indigo-500 hover:cursor-pointer dark:text-indigo-400',
          className
        )}
      />
    )
      
  } else {
    return (
      <Moon
        onClick={toggleTheme}
        size={24}
        className={clsx(
          'text-indigo-500 hover:text-indigo-600 hover:cursor-pointer dark:text-indigo-200',
          className
        )}
      />
    )
  }
}

export default ColorModeToggle