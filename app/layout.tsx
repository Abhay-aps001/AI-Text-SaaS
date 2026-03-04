import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Text Improver — Fix Grammar & Rewrite with AI",
  description: "Instantly improve your writing with AI. Fix grammar, spelling, and rewrite in professional, friendly, or simple tone using LLaMA 3.3.",
  keywords: ["AI writing", "grammar checker", "text improver", "AI rewriter", "tone adjustment"],
  authors: [{ name: "Abhay Pratap Singh", url: "https://www.linkedin.com/in/abhayypratap24/" }],
  openGraph: {
    title: "AI Text Improver — Fix Grammar & Rewrite with AI",
    description: "Transform your text into professional, friendly, or simple tone instantly.",
    url: "https://your-deployed-url.vercel.app",
    siteName: "AI Text Improver",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Text Improver",
    description: "Improve your writing instantly with AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}