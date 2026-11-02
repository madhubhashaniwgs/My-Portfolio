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
  title: "Saranga Madhubhashani | Portfolio",
  description:
    "Portfolio of Saranga Madhubhashani, an Information Technology undergraduate at the University of Moratuwa aspiring to be a Software Engineer. Explore projects, technical skills, education, and experience.",
  keywords: [
    "Saranga Madhubhashani",
    "Software Engineer",
    "Internship",
    "University of Moratuwa",
    "Sri Lanka",
    "Full-Stack Developer",
    "Backend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Spring Boot",
    "PostgreSQL",
    "Docker",
  ],
  authors: [{ name: "Saranga Madhubhashani" }],
  openGraph: {
    title: "Saranga Madhubhashani | Portfolio",
    description:
      "Portfolio of Saranga Madhubhashani, an Information Technology undergraduate at the University of Moratuwa aspiring to be a Software Engineer.",
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
      <head>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        if (typeof window !== 'undefined') {
          window.history.scrollRestoration = 'manual';
          window.scrollTo(0, 0);
         
          if (window.location.hash) {
            window.history.replaceState(null, null, window.location.pathname);
          }
          window.addEventListener('beforeunload', function () {
            window.scrollTo(0, 0);
          });
        }
      `,
    }}
  />
</head>
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