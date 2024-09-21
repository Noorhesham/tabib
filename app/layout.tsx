import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "locomotive-scroll/src/locomotive-scroll.scss";

import { Almarai } from "next/font/google";

import { SmoothScrollProvider } from "./context/ScrollProviderContext";
const inter = Almarai({ subsets: ["arabic"], weight: ["400", "700", "300"] });

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
    <html lang="ar">
      <body dir="rtl" className={`${inter.className}  `}>
       
          <main>
            <ToastContainer
              position="top-center"
              autoClose={3500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              pauseOnFocusLoss
              pauseOnHover={false}
              theme="light"
            />

            {children}
          </main>
     
      </body>
    </html>
  );
}
