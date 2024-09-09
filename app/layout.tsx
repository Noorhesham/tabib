import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";
import NavBar from "./components/nav/NavBar";
const inter = Cairo({ subsets: ["latin"], weight: ["400", "600", "700", "200", "300", "500"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body dir="rtl" className={`${inter.className}  `}>
        <main className="">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
