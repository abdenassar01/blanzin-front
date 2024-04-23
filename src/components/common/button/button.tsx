import React, { useMemo } from "react";

import { TranslatedText } from "../..";
import { cn } from "@/utils";

type Props = {
  onClick?: () => void;
  text?: string;
  className?: string;
  textClassName?: string;
  width?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  theme?: "primary" | "secondary" | "tertiary" | "error" | "warn" | "success";
};

export const Button = ({
  onClick,
  text,
  width,
  className,
  textClassName,
  theme = "primary",
  children,
  disabled,
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ width: width || "100%" }}
      className={cn(
        "p-3 rounded justify-center items-center border-[1px] border-main",

        theme === "primary"
          ? "bg-main text-secondary"
          : theme === "secondary"
          ? "bg-secondary border-secondary"
          : theme === "success"
          ? "bg-success border-success"
          : theme === "tertiary"
          ? "border-[1px] font-bold"
          : theme === "warn"
          ? "bg-warn border-warn"
          : "border-error bg-error",
        className
      )}
    >
      {children ? (
        children
      ) : (
        <TranslatedText
          className={cn(
            theme === "secondary" || theme === "tertiary"
              ? "text-main"
              : theme === "primary"
              ? "text-secondary"
              : "text-white",
            textClassName
          )}
          tranlationKey={text || ""}
        />
      )}
    </button>
  );
};
