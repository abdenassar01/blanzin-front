"use client";

import React from "react";
import { Control, FieldValue, useController } from "react-hook-form";
import { TranslatedHeading, TranslatedText } from "../..";
import { cn } from "@/utils";
import Image from "next/image";
import { useTheme } from "next-themes";

type Props = {
  control: Control<FieldValue<any>>;
  name: string;
  label: string;
  className?: string;
};

export function FileUpload({ label, control, name, className }: Props) {
  const { theme } = useTheme();

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div>
      <TranslatedHeading
        className="text-sm text-secondary dark:text-main mb-1"
        tranlationKey={label}
      />
      <label
        htmlFor={name}
        className={cn(
          "bg-backgroundSecondary dark:bg-backgroundSecondaryDark items-center p-2 rounded flex justify-between",
          className
        )}
      >
        <input
          id={name}
          onChange={(e) => {
            onChange(e.currentTarget.value);
            console.log(e.currentTarget.value);
          }}
          type="file"
          className="hidden"
        />
        <TranslatedText
          className="max-w-[90%]"
          tranlationKey={value || "forms.upload"}
        />
        <Image
          alt=""
          className="w-[30px] h-[30px]"
          src={
            theme === "dark"
              ? require("@/assets/images/icons/dark/upload.svg")
              : require("@/assets/images/icons/light/upload.svg")
          }
        />
      </label>
      <div className="text-error text-xs">{error?.message}</div>
    </div>
  );
}
