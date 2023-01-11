import "../styles/globals.css"
import Header from "./header"
import Footer from "./footer"

export interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="">
      <head />
      <body className="h-screen grid grid-cols-[minmax(min-content,max-content)_1fr] grid-rows-[minmax(min-content,1fr)_minmax(min-content,max-content)]">
        <Header className="row-span-2" />
        <div className="bg-indigo-50">
          {children}
        </div>
        <Footer className="col-span-1 col-start-2" />
      </body>
    </html>
  )
}