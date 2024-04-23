import * as React from "react";
import { TranslatedText } from "./translated-text";
import { cn } from "@/utils";

type Props = {
  text: string;
  className?: string;
};

export function BulletPoints({ text, className }: Props) {
  return (
    <div className="flex-row items-start">
      <div className="w-2 h-2 mt-1.5 mr-1 rounded-full bg-secondary dark:bg-main" />
      <TranslatedText className={cn("", className)} tranlationKey={text} />
    </div>
  );
}
