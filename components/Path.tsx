"use client";
import { usePathname } from "next/navigation";

interface PathProps {
  component: React.ReactNode;
}

export function Path({ component }: PathProps) {
  const pathname = usePathname();
  return <>{pathname.includes("dashboard") ? null : component}</>;
}
