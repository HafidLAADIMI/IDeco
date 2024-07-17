import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import { StepContextWrapper } from "./stepsContext";
import { FormProvider } from "./formContext";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

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
      <body className={poppins.className}>
        <StepContextWrapper>
          <FormProvider>{children}</FormProvider>
        </StepContextWrapper>
      </body>
    </html>
  );
}
