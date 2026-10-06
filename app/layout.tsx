import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "User Research Participant Portfolio | Yash Chaudhari",
  description:
    "Research participation portfolio of Yash Chaudhari — usability tests, 1:1 interviews, diary missions, AI evaluations and product feedback since 2024.",
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