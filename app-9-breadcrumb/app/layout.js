"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Breadcrumb from "./components/Breadcrumb";
import MUIArBreadcrumb from "./components/MUIArBreadcrumb";
import MUIEnBreadcrumb from "./components/MUIEnBreadcrumb";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* English */}
        <Breadcrumb homeElement={"Root"} />

        {/* Arabic With MUI */}
        <MUIArBreadcrumb homeElement={"رووت"} />

        {/* English With MUI */}
        <MUIEnBreadcrumb homeElement={"Root"} />

        {/*  */}
        {children}
      </body>
    </html>
  );
}
