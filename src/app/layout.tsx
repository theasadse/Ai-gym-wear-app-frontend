import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const display = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const body = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PulseFit Gymwear",
  description: "AI-personalized activewear shopping and training companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-foreground">
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(49,224,186,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(138,246,255,0.2),transparent_30%)] mix-blend-screen" />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="relative z-10 flex-1 px-6 pb-10 pt-6 sm:px-10 lg:px-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
