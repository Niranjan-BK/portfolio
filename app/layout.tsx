// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niranjan BK | Full-Stack Developer",
  description:
    "Portfolio of Niranjan BK – full-stack MERN developer, Node.js, Next.js, React, DevOps & Test Automation learner.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
