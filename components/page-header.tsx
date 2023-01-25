export interface PageHeaderProps {
  title: string
  children?: React.ReactNode
  className: string
}

const PageHeader = ({title, children, className}: PageHeaderProps) => {
  return (
    <div className={`flex items-center justify-between dark:text-slate-300 ${className ?? ''}`}>
      <h1 className="text-xl">{title}</h1>
      {children}
    </div>
  )
}

export default PageHeader