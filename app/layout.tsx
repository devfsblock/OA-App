import type React from "react";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "../lib/auth-context";
import ContextProvider from "../context";
import { cookies } from "next/headers";
import "../styles/globals.css";

export const metadata = {
  title: "OanicAI Dashboard",
  description: "Web3 dashboard for OanicAI platform",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ContextProvider
            cookies={decodeURIComponent(cookieStore.toString()) || null}
          >
            <AuthProvider>{children}</AuthProvider>
          </ContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}