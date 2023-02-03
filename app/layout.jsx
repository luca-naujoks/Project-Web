"use client";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { Auth } from "../components/auth";
import { useSelectedLayoutSegment } from 'next/navigation';
import "./globals.css";

export default function RootLayout({ children }) {

  const isHub = useSelectedLayoutSegment() == "hub";
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {}
          <div className={isHub ? "flex justify-between bg-[#161b22]" : "flex justify-between"}>
            <Link href="/">
              <div className="transition flex items-center text-gray-500 hover:text-sky-600 font-bold text-lg duration-200">
                <img
                  src="/Axolotl_Logo.png"
                  alt="Bobby"
                  className="xs:h-8 md:h-10 m-3"
                />{" "}
                Bobby68
              </div>
            </Link>
            <Auth />
          </div>
          <div>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
