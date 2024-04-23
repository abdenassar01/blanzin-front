import React from "react";
import { TranslatedText } from "../..";
import { cn } from "@/utils";
import Link from "next/link";

type Props = {
  url: string;
  handler?: () => void;
  text: string;
  className?: string;
  newTab?: boolean;
};

export function CustomLink({ text, handler, url, className, newTab }: Props) {
  return (
    <Link
      className="cursor-pointer"
      href={url}
      target={newTab ? "_blank" : "_self"}
    >
      <TranslatedText
        className={cn(" text-[#2b5fbe]", className)}
        tranlationKey={text}
      />
    </Link>
  );
}
