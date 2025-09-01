import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "RuteKita - Platform Transportasi Bus Digital",
  description:
    "Platform digital generasi terbaru yang merevolusi transportasi bus di Indonesia. Menghubungkan penumpang dengan operator melalui teknologi modern.",
  icons: {
    icon: "/screenshots/icon-logo.png",
    shortcut: "/screenshots/icon-logo.png",
    apple: "/screenshots/icon-logo.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css" />
        <link rel="icon" type="image/svg+xml" href="/screenshots/icon-logo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}