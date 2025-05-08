import type React from "react"
import { ThemeProvider } from "next-themes"
import { AuthProvider } from "../lib/auth-context"
import ContextProvider from "../context"
import "../styles/globals.css"

export const metadata = {
  title: "OanicAI Dashboard",
  description: "Web3 dashboard for OanicAI platform",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
  cookies,
}: {
  children: React.ReactNode
  cookies?: string | null
}) {
  return (
    <html lang="en">
       
       <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ContextProvider cookies={cookies || null}>
            <AuthProvider>{children}</AuthProvider>
          </ContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


