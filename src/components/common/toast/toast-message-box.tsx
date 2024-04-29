import * as React from "react";
import { TranslatedText } from "../translated-text";

import { useMemo } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/utils";
import Image from "next/image";

export function ToastMessageBox({ message, type, icon }: any) {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme === "dark", [theme]);

  const getBackgroundColorClassName = () => {
    switch (type) {
      case "danger":
        return "bg-error";
      case "success":
        return "bg-success";
      case "warning":
        return "bg-warn";
      default:
        return "bg-secondary dark:bg-main";
    }
  };

  const getBorderColorClassName = () => {
    switch (type) {
      case "danger":
        return "border-error";
      case "success":
        return "border-success";
      case "warning":
        return "border-warn";
      default:
        return "border-secondary dark:border-main";
    }
  };

  return (
    <div
      className={cn(
        "w-[90%] my-1 rounded-md p-2 flex-row items-center bg-backgroundSecondary dark:bg-backgroundSecondaryDark border-[1px]",
        getBorderColorClassName()
      )}
    >
      {icon || (
        <Image
          alt=""
          className="w-7 h-7"
          src={
            isDark
              ? require("@/assets/images/logo/logo-dark.png")
              : require("@/assets/images/logo/logo.png")
          }
        />
      )}
      <div
        className={cn("w-1 h-full mx-1 rounded", getBackgroundColorClassName())}
      />

      {typeof message === "string" && (
        <TranslatedText
          className={cn(
            "w-[80%]",
            type === "warning"
              ? "text-black"
              : "text-backgroundSecondaryDark dark:text-white"
          )}
          tranlationKey={message}
        />
      )}
      {type === "danger" ? (
        <Image
          className="w-4 h-4 absolute right-2 rotate-45"
          alt=""
          src={
            isDark
              ? require("@/assets/images/logo/logo-dark.png")
              : require("@/assets/images/logo/logo-dark.png")
          }
        />
      ) : (
        <Image
          className="w-4 h-4 absolute right-2"
          alt=""
          src={
            isDark
              ? require("@/assets/images/logo/logo-dark.png")
              : require("@/assets/images/logo/logo-dark.png")
          }
        />
      )}
    </div>
  );
}
