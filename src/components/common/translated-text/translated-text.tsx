import { cn } from "@/utils";
import { useCurrentLocale, useI18n } from "@/utils/locales/client";
import React from "react";

type Props = {
  className?: string;
  tranlationKey: string;
};

export const TranslatedText = ({ tranlationKey, className }: Props) => {
  return <span className={className}>{tranlationKey}</span>;
};

export const TranslatedHeading = ({ tranlationKey, className }: Props) => {
  return <span className={cn("font-bold", className)}>{tranlationKey}</span>;
};
