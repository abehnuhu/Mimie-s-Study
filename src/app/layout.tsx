import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ServiceWorkerRegister } from "@/components/study/sw-register";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mimie's Study — Her little corner to become an amazing midwife",
  description:
    "A private, beautiful learning companion for Mimie's BSc Midwifery journey. Study smart. Grow confident.",
  robots: { index: false, follow: false, nocache: true, noarchive: true },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/icons/icon-192.png" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Mimie's Study",
  },
};

export const viewport: Viewport = {
  themeColor: "#d4738c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster
          position="top-center"
          richColors
          closeButton
          toastOptions={{
            classNames: {
              toast: "rounded-2xl border-border/70 bg-card/95 backdrop-blur-md shadow-lg shadow-primary/15",
              title: "font-display font-semibold",
              description: "text-muted-foreground leading-snug",
            },
          }}
        />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
