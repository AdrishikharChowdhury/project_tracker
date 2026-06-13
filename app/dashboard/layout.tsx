import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full h-screen">
    <Sidebar />
    {children}
  </div>;
}
