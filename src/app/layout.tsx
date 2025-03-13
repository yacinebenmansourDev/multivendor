//  Next.js
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";

// Global css
import "./globals.css";

// Clerk Provider
import { ClerkProvider } from "@clerk/nextjs";

// Fonts
const interFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});
const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-barlow",
});

// Metadata
export const metadata: Metadata = {
  title: "GoShop",
  description:
    "Discover the ultimate shopping experience with our Multivendor E-Commerce App! Shop from a variety of vendors, explore diverse product categories, and enjoy a seamless checkout process. Vendors can easily manage their stores, track orders, and grow their business. Secure payments, real-time notifications, and user-friendly design make shopping easier than ever!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${barlowFont.variable} ${interFont.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
