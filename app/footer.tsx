export interface FooterProps {
  className?: string
}

export default function Footer({className}: FooterProps) {
  const baseClasses = 'flex items-center justify-center text-sm p-2'
  const classes = className ? `${baseClasses} ${className}` : baseClasses

  return (
    <div className={classes}>
      <p>Created with <a href="https://github.com/lelandriordan/next-dashboard">Next.js Dashboard</a> by <a href="https://www.lelandriordan.com">Leland Riordan</a></p>
    </div>
  )
}