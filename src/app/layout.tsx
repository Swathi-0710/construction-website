import type { Metadata } from "next";
// @ts-ignore Next.js handles global CSS imports at build time.
import "./globals.css";

export const metadata: Metadata = {
  title: "Construction 2 WordePress Theme",
  description: "XTRA Construction home page.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400","500","600","700"] });
// <body className={poppins.className}>
