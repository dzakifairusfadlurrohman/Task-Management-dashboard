import type { Metadata } from "next";
import AppNav from "@/components/AppNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Task Management Dashboard",
  description: "Dashboard untuk mengelola daftar task pekerjaan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <div className="app">
          <AppNav />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
