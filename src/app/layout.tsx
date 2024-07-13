import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StepContextWrapper } from "./stepsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IDeco",
  description: "Customize your product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StepContextWrapper>{children}</StepContextWrapper>
      </body>
    </html>
  );
}
