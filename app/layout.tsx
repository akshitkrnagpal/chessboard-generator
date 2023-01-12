import { Inter } from "@next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({
  variable: "--font-inter",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body className={clsx(inter.variable, "font-sans")}>{children}</body>
    </html>
  );
};

export default RootLayout;
