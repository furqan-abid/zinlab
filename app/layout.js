import Footer from "@/src/components/footer/Footer";
import Header from "@/src/components/header/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "zinlab",
  description: "zinlab assesment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
