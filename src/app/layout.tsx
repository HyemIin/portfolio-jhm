import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
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
  title: "정혜민 | Software Engineer",
  description:
    "정혜민의 포트폴리오. 백엔드 엔지니어로서 안정적이고 확장 가능한 서비스를 만듭니다.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🫐</text></svg>",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full font-sans">
        <Sidebar />
        <main className="mt-14 flex min-h-screen flex-1 flex-col xl:ml-60 xl:mt-0">
          {children}
          <Footer />
          <ScrollToTop />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
