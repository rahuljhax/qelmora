import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/features/auth/context/AuthContext";

export const metadata: Metadata = {
  title: "Qelmora",
  description: "Project Management Platform",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <Toaster position="top-right" />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
