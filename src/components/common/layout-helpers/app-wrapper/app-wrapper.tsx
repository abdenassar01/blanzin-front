import { cn } from "@/utils";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode | Iterable<ReactNode>;
  className?: string;
};

export const AppWrapper = ({ children, className }: Props) => {
  return (
    <div className={cn("px-4 pt-4 h-full w-full", className)}>{children}</div>
  );
};
