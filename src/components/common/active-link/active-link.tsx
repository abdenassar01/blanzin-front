"use client";

import { usePathname } from "@/navigation";
import { cn } from "@/utils";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  link: string;
  activeClassName?: string;
};

export function ActiveLink({
  link,
  className,
  children,
  activeClassName,
}: Props) {
  const pathname = usePathname();
  console.log("Pathname: ", pathname);
  console.log("current-link: ", link);
  return (
    <Link
      className={cn(
        "font-[500] text-sm text-text hover:text-secondary dark:hover:text-main dark:text-textdark",
        className,
        pathname === link
          ? cn("text-secondary dark:text-main", activeClassName)
          : ""
      )}
      href={link}
    >
      {children}
    </Link>
  );
}
