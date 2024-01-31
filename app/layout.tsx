import type { Metadata } from "next"

// components
import Header from "@/components/Header/Header"

// styles
import "@/styles/globals.scss"

export const metadata: Metadata = {
  title: "Ticket Travel",
  description: "Buy you tickets now!"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
