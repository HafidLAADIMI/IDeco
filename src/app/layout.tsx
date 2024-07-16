import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StepContextWrapper } from "./stepsContext";
import { FormProvider } from "./formContext";

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
        <StepContextWrapper>
          <FormProvider>{children}</FormProvider>
        </StepContextWrapper>
      </body>
    </html>
  );
}
