import { SidebarProvider } from "@/components/ui/sidebar";
import { HeaderLayout } from "./_components/header";
import { SidebarLayout } from "./_components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen w-full">
          <SidebarLayout />
          <div className="flex-1 flex flex-col w-full overflow-hidden">
            <HeaderLayout />
            <div className="flex-1 w-full">{children}</div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
