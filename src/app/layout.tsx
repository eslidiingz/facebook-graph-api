import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from 'react';
import FacebookSDKInitializer from "@/app/components/FacebookSDKInitializer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'My App',
  description: 'My App Description',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FacebookSDKInitializer />
        {children}
      </body>
    </html>
  );
}
