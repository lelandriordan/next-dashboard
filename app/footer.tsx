export interface FooterProps {
  className?: string
}

const Footer = ({className}: FooterProps) => {
  const baseClasses = 'flex items-center justify-center text-sm p-2'
  const classes = className ? `${baseClasses} ${className}` : baseClasses

  return (
    <div className={classes}>
      <p>Created with <a target="_blank" rel="nofollow" href="https://github.com/lelandriordan/next-dashboard">Next Dashboard</a> by <a target="_blank" rel="nofollow" href="https://www.lelandriordan.com">Leland Riordan</a></p>
    </div>
  )
}

export default Footer