import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./components/Provider";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import Image from "next/image";
import { Logout, NavLogin } from "./components/Button";
import Link from "next/link";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CL Chat - Simple chat app built with Next.js and Tailwind CSS",
  description:
    "Modern chat app built with Next.js and Tailwind CSS and powered by NextAuth.js and Supabase with Pusher for realtime updates.",
  keywords: [
    "nextjs",
    "tailwindcss",
    "nextauth",
    "supabase",
    "pusher",
    "chat",
    "realtime",
    "react",
    "typescript",
    "nextjs starter",
    "nextjs template",
    "tailwindcss starter",
    "tailwindcss template",
    "nextjs tailwindcss starter",
    "nextjs tailwindcss template",
    "nextjs tailwindcss starter template",
    "nextjs tailwindcss template starter",
    "nextjs tailwindcss starter template with nextauth",
    "nextjs tailwindcss template with nextauth",
    "nextjs tailwindcss starter template with nextauth",
    "nextjs tailwindcss template starter with nextauth",
    "nextjs tailwindcss starter template with nextauth and supabase",
    "nextjs tailwindcss template with nextauth and supabase",
    "nextjs tailwindcss starter template with nextauth and supabase",
    "nextjs tailwindcss template starter with nextauth and supabase",
    "nextjs tailwindcss starter template with nextauth supabase and pusher",
    "nextjs tailwindcss template with nextauth supabase and pusher",
    "nextjs tailwindcss starter template with nextauth supabase and pusher",
    "nextjs tailwindcss template starter with nextauth supabase and pusher",
  ],
  publisher: "CL Chat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cl-chat.vercel.app/",
    title: "CL Chat - Simple chat app built with Next.js and Tailwind CSS",
    description: `Modern chat app built with Next.js and Tailwind CSS and powered by NextAuth.js and Supabase with Pusher for realtime updates.`,
    images: [
      {
        url: "https://i.imgur.com/9sdQpCG.png",
        width: 1200,
        height: 630,
        alt: "CL Chat - Simple chat app built with Next.js and Tailwind CSS",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          {/* Add Google Analytics script */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-W67JJJTSNL`}
          />
          <Script strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W67JJJTSNL');
            `}
          </Script>
          {/* Navbar */}
          <nav className="flex px-10 py-5 justify-between fixed top-0 left-0 w-full bg-white">
            <Link href="/">
              <h1 className="text-black text-3xl font-bold">
                CL<span className="text-blue-500">Chat</span>
              </h1>
            </Link>

            {session ? (
              <div className="flex items-center">
                <Image
                  src={session.user?.image as string}
                  alt="User profile photo"
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <Logout />
              </div>
            ) : (
              <NavLogin />
            )}
          </nav>

          {/* Main */}
          <main>{children}</main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
