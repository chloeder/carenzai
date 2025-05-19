"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { HeaderLayout } from "./_components/header";
import { Metadata } from "next";
import { Lexend } from "next/font/google";
import { usePathname } from "next/navigation";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
      style={{ fontFamily: lexend.style.fontFamily }}
    >
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen w-full">
          <div className="flex-1 flex flex-col w-full overflow-hidden">
            {!path.startsWith("/interview/") && <HeaderLayout />}
            <div className="flex-1 w-full">{children}</div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
