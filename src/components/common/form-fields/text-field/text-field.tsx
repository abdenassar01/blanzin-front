"use client";

import React, { HTMLProps, useState } from "react";
import { Control, useController } from "react-hook-form";
import icon from "@/assets/images/icons/eye.svg";
import iconClosed from "@/assets/images/icons/eye-closed.svg";
import Image from "next/image";
import { cn } from "@/utils";

type InputProps = HTMLProps<HTMLInputElement> & {
  control: Control<any>;
  name: string;
  label: string;
  inputClassName?: string;
  className?: string;
  labelClassName?: string;
  iconUrl?: string;
};

export function FieldText({
  control,
  name,
  type,
  label,
  placeholder,
  inputClassName,
  className = "",
  labelClassName,
  iconUrl,
}: InputProps) {
  const [isPassword, setIsPassword] = useState<boolean>(type === "password");

  const {
    field: { onBlur, onChange },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className={cn("group relative flex w-[100%] flex-col", className)}>
      <label
        htmlFor={name}
        className={cn(
          "text-base font-bold text-cardText sm:text-mb-xbase",
          labelClassName
        )}
      >
        {label}
      </label>
      <input
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        type={isPassword ? "password" : "text"}
        className={cn(
          "rounded-md border-none bg-backgroundSecondary dark:bg-backgroundSecondaryDark p-2 py-3 w-full leading-4 placeholder-[#A6A6A6] sm:p-[5.097vw] sm:text-mb-xxs",
          iconUrl && "pl-[3.5vw] sm:pl-[10vw]",
          inputClassName,
          error && "border-red-600"
        )}
        placeholder={placeholder}
      />
      {iconUrl && (
        <div
          style={{ backgroundImage: `url('${iconUrl}')` }}
          className="absolute left-[4%] top-[55%] h-[1.042vw] w-[1.389vw] bg-contain bg-no-repeat group-placeholder-shown:block sm:top-[60%] sm:h-[3.883vw] sm:w-[4.854vw]"
        />
      )}
      {type === "password" && (
        <Image
          onClick={() => setIsPassword((prev) => !prev)}
          src={isPassword ? icon : iconClosed}
          alt="password toggle"
          className="absolute right-[2%] top-[50%]"
        />
      )}
      <p className="h-[2vh] sm:h-[4vw] text-xxs text-error">
        {error?.message?.toString()}
      </p>
    </div>
  );
}
