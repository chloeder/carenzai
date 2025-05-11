"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { UserButton } from "@clerk/nextjs";

export function HeaderLayout() {
  const isMobile = useIsMobile();

  return (
    <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-md">
      <div className="flex h-16 items-center px-4 md:px-6">
        {isMobile && <SidebarTrigger className="mr-2" />}
        <div className="ml-auto flex items-center gap-4">
          <UserButton />
        </div>
      </div>
    </header>
  );
}
