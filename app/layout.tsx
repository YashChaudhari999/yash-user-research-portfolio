import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "User Research Participant Portfolio",
  description:
    "A three-year portfolio of user research, usability testing, diary studies, interviews and product feedback.",
  icons: {
    icon: "/YC.png",
    apple: "/YC.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}