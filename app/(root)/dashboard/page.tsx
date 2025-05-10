import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <UserButton />
    </div>
  );
}
