import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./ui/components/NavBar";

export const metadata: Metadata = {
  title: "G-Marvel",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
