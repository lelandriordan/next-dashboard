import Link from "next/link"
import GlobalNav from "../components/global-nav"

export interface HeaderProps {
  className?: string
}

export default function Header({className}: HeaderProps) {
  const baseClasses = 'flex flex-col items-start gap-4 shadow-md p-2'
  const classes = className ? `${baseClasses} ${className}` : baseClasses

  return (
    <div className={classes}>
      <Link href='/' className="mx-auto text-xl py-2 px-4">Next Dashboard</Link>
      <GlobalNav />
    </div>
  )
}