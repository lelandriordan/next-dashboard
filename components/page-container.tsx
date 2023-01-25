export interface PageContainerProps {
  children: React.ReactNode
  className?: string
}

const PageContainer = ({children, className}: PageContainerProps) => {
  return (
    <div className={`container min-h-0 h-full mx-auto md:px-6  ${className && className}`}>
      {children}
    </div>
  )
}

export default PageContainer