import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { AuroraBackground } from "@/components/animations/AuroraBackground";
import { Toaster } from "@/components/ui/toaster";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFF" },
    { media: "(prefers-color-scheme: dark)", color: "#090B18" },
  ],
};

export const metadata: Metadata = {
  title: "Software Engineering Portfolio | IT Undergraduate (UoM)",
  description:
    "Portfolio of an IT undergraduate at the University of Moratuwa, Sri Lanka, preparing for Software Engineering internship opportunities. Showcasing full-stack engineering, concurrency control, system design, and practical software projects.",
  keywords: [
    "Software Engineer",
    "Internship",
    "University of Moratuwa",
    "Sri Lanka",
    "Full-Stack Developer",
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Docker",
  ],
  authors: [{ name: "IT Undergraduate, University of Moratuwa" }],
  openGraph: {
    title: "Software Engineering Portfolio | IT Undergraduate (UoM)",
    description:
      "Portfolio of an IT undergraduate at the University of Moratuwa, Sri Lanka, preparing for Software Engineering internship opportunities.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans">
        <Providers>
          <ScrollProgressBar />
          <AuroraBackground>
            <Header />
            <main className="flex-1 pt-24">{children}</main>
            <Footer />
          </AuroraBackground>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
