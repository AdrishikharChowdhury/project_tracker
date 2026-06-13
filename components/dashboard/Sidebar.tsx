"use client";
import { ClipboardList, FilePlus, FolderKanban, LayoutDashboard, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { dashboardlinks } from "@/lib/constants";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  FolderKanban,
  FilePlus,
  ClipboardList,
};

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`p-5 bg-amber-950 text-white justify-start gap-16 h-full flex flex-col transition-all duration-300 ${collapsed ? "w-25" : "w-1/5"}`}>
      <div className="flex items-center justify-between">
        <h1 className={`text-2xl gap-3 flex items-center font-extrabold text-white ${collapsed ? "mx-auto" : ""}`}>
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          {!collapsed && (
            <>
              <span>Loony</span>
              <span className="text-amber-400">Wolfie</span>
            </>
          )}
        </h1>
        
      </div>
      <div className="flex flex-col gap-2 w-full">
        {dashboardlinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <Link
              href={link.href}
              key={link.name}
              className={`flex items-center gap-3 w-full font-extrabold text-md hover:bg-amber-900 transition-colors ${pathname === link.href ? "bg-amber-900" : ""} py-4 border-amber-900 rounded-2xl ${collapsed ? "justify-center px-2" : "px-6"}`}
              title={collapsed ? link.name : undefined}
            >
              {Icon && <Icon className="size-5 shrink-0" />}
              <p className={`shrink-0 ${collapsed ? "hidden" : "overflow-hidden"}`}>{link.name}</p>
            </Link>
          );
        })}
      </div>
      
      <div className={`items-center w-full mt-auto flex gap-8 justify-center ${collapsed ? "flex-col gap-2" : "scale-150"} py-6`}>
        <UserButton />
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-amber-900 transition-colors cursor-pointer"
        >
          {collapsed ? <PanelLeftOpen className="size-5" /> : <PanelLeftClose className="size-5" />}
        </button>
      </div>
    </div>
  );
}