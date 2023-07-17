"use client"

import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"

const Providers = ({ children }) => {
    return (
        <SessionProvider >
            <ThemeProvider attribute="class">
                {children}
            </ThemeProvider>
        </SessionProvider>
    )
}
export default Providers;