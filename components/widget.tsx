export interface WidgetProps {
  title?: string
  className?: string
  children: React.ReactNode
}

export default function Widget({title, className, children}: WidgetProps) {
  return (
    <div className={`bg-white rounded-lg p-4 shadow-sm ${className ?? ''}`}>
      <div className="text-slate-600 text-sm font-bold uppercase pb-4">
        {title}
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}