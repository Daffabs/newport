import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daffa Bagus Syach Putra | QA Manual Tester & System Analyst",
  description:
    "Portofolio Daffa Bagus Syach Putra - QA Manual Tester & System Analyst. Lulusan S1 Teknik Informatika UNIKOM dengan keahlian manual testing, analisis kebutuhan bisnis, dan pemodelan sistem (DFD, ERD, Flowchart).",
  keywords: [
    "Daffa Bagus Syach Putra",
    "QA Manual Tester",
    "System Analyst",
    "Quality Assurance",
    "Portofolio QA",
    "Teknik Informatika UNIKOM",
    "UAT Testing",
    "Manual Testing",
  ],
  authors: [{ name: "Daffa Bagus Syach Putra" }],
  openGraph: {
    title: "Daffa Bagus Syach Putra - Portfolio",
    description:
      "QA Manual Tester | System Analyst | Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="bg-black text-[#F1F5F9] antialiased selection:bg-[#38BDF8] selection:text-[#0F172A] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}

