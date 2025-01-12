import localFont from "next/font/local";
import { Suwannaphum, Noto_Serif_Khmer } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const suwannaphum_init = Suwannaphum({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-suwannaphum--',
})
export const metadata = {
  title: "Track News",
  description: "Provide news world wide to everyone",
  icons:{
    icon: '/logo.svg',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${suwannaphum_init.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
