import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import { AuthProvider } from "./context/AuthProvider";
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ElaraVerse App",
  description: "Your Universe Of Shopping",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-[#F1F1F0] `} > 
        <AuthProvider>
        <Navbar/>
        <div className=" grow-1 pt-30">
          {children}
          <Toaster />
        </div>
        <Footer/>
        </AuthProvider>

      </body>
    </html>
  );
}
