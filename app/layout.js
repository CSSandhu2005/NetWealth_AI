import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subset: ["latin"] });

export const metadata = {
  title: "NetWealth AI",
  description: "AI Powered Finance Management For Building Wealth",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <footer className="bg-[#38B491] py-12">
            <p className="container mx-auto px-4 text-center text-[#fff]">
              NetWealth AI 🦬 Project Made For HackNovate
            </p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
