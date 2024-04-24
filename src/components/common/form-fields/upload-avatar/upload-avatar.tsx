import React, { ReactNode } from "react";
import { Button, TranslatedText } from "../..";
import { Control, useController } from "react-hook-form";
import Image from "next/image";
import { cn } from "@/utils";

type Props = {
  control: Control<any>;
  name: string;
  label?: string;
  defaultValue?: string;
  children?: ReactNode;
  className?: string;
  imgClassName?: string;
};

export function UploadAvatar({
  control,
  name,
  defaultValue,
  className,
  imgClassName,
  label,
}: Props) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ control, name, defaultValue });

  return (
    <>
      <div className="w-full flex justify-center">
        <TranslatedText
          tranlationKey={label || "avatar"}
          className="font-bold capitalize text-secondary dark:text-main"
        />
      </div>
      <label
        htmlFor={name}
        className={cn("w-full flex justify-center items-center", className)}
      >
        <Image
          alt=""
          className={cn("w-[15vw] sm:w-[40vw] rounded", imgClassName)}
          src={value || require("@/assets/images/avatar.png")}
        />
        <div className="items-center">
          <input
            id={name}
            onChange={(e) => {
              onChange(e.currentTarget.value);
              console.log(e.currentTarget.value);
            }}
            type="file"
            className="hidden"
          />
        </div>
      </label>
      <TranslatedText
        tranlationKey={error?.message || ""}
        className="h-[15px] pl-1 text-[10px] text-error"
      />
    </>
  );
}
