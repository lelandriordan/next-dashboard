import "../styles/globals.css"
import Header from "./header"
import Footer from "./footer"

export interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="">
      <head />
      <body
        className="
        text-slate-700
        dark:text-slate-100
        h-screen
        bg-indigo-50
        dark:bg-slate-900
        grid
        grid-cols-1
        grid-rows-[auto_1fr]
        md:grid-cols-[minmax(min-content,max-content)_minmax(min-content,1fr)]
        md:grid-rows-[minmax(min-content,1fr)_auto]"
      >
        <Header className="md:row-span-2" />
        <main className="overflow-auto p-2 md:p-6 ">
          {children}
        </main>
        <Footer className="md:col-span-1 md:col-start-2" />
      </body>
    </html>
  )
}

export default RootLayout