import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Next Community",
  description: "다양한 생각이 모여드는 곳, Next Community",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang='en'>
      <body className={`${pretendard.variable} antialiased`}>{children}</body>
    </html>
  );
}
