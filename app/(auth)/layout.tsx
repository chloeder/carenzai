export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
      {children}
    </div>
  );
}
