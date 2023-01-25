import Link from "next/link"
import { ChevronsRight } from "react-feather"
export interface WidgetProps {
  title?: string
  href?: string
  className?: string
  children: React.ReactNode
}

const Widget = ({title, href, className, children}: WidgetProps) => {
  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm ${className ?? ''}`}>
      {href && title ? 
        <Link
          href={href}
          title={title}
          className="flex gap-1 text-sm font-bold uppercase pb-4"
        >
          {title}
          <ChevronsRight size={20} />
        </Link>
      : title ?
        <div className="text-slate-600 dark:text-slate-400 text-sm font-bold uppercase pb-4">
          {title}
        </div>
      : null}
      <div>
        {children}
      </div>
    </div>
  )
}
export default Widget