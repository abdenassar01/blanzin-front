import { cn } from "@/utils";
import React from "react";

type Props = {
  active: boolean;
  onActiveChange: () => any;
};

export function Switch({ active, onActiveChange }: Props) {
  return (
    <button
      onClick={onActiveChange}
      className={cn(
        "relative h-[30px] w-[55px] rounded-full",
        active ? "bg-secondary" : "bg-backgroundDark"
      )}
    >
      <div
        className={cn(
          "absolute h-[30px] transition-all ease-in-out top-0 w-[30px] bg-main rounded-full",
          active ? "right-0" : "left-0"
        )}
      />
    </button>
  );
}
