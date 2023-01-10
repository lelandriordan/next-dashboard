import "../styles/globals.css";
import Header from "./header";
import Footer from "./footer";

export interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="">
      <head />
      <body>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}