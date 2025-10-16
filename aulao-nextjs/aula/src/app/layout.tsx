// import { Header } from "@/components/header/header";
// import { Footer } from "@/components/footer/footer";
import { Header } from '../components/header/header'
import { Footer } from '../components/footer/footer'
// As duas formas de importação acima funcionam da mesma forma


import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        <Header/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
