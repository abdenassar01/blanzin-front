import { cn } from "@/utils";
import React from "react";

export function Heading({
  heading,
  className,
}: {
  heading: string;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "font-bold text-xxl text-secondary dark:text-main",
        className
      )}
    >
      {heading}
    </h3>
  );
}
