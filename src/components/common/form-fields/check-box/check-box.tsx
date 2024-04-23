"use client";

import * as React from "react";
import { Control, useController } from "react-hook-form";
import { TranslatedText } from "../../translated-text";

import { useMemo } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/utils";
import Image from "next/image";

type Props = {
  control: Control<any>;
  name: string;
  label: string;
};

export function CheckBox({ control, name, label }: Props) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ control, name, defaultValue: false });

  const { theme } = useTheme();
  const isDark = useMemo(() => theme === "dark", [theme]);

  return (
    <div>
      <button
        onClick={() => onChange(!value)}
        className="flex flex-row items-center"
      >
        <div
          className={cn(
            "flex w-5 h-5 rounded border-[1px] justify-center items-center border-secondary dark:border-main",
            value ? "bg-secondary dark:bg-main" : ""
          )}
        >
          {value && (
            <Image
              alt=""
              className="w-4 h-4"
              src={
                isDark
                  ? require("@/assets/images/icons/dark/checkmark.svg")
                  : require("@/assets/images/icons/light/checkmark.svg")
              }
            />
          )}
        </div>
        <TranslatedText tranlationKey={label} className="ml-1" />
      </button>
      <span className="text-error text-xs">{error?.message}</span>
    </div>
  );
}
