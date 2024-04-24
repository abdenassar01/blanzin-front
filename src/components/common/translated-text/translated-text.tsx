import { cn } from "@/utils";
import { useI18n } from "@/utils/locales/client";
import React from "react";

type Props = {
  className?: string;
  tranlationKey: string;
};

export const TranslatedText = ({ tranlationKey, className }: Props) => {
  const t = useI18n();
  return <span className={className}>{t(tranlationKey)}</span>;
};

export const TranslatedHeading = ({ tranlationKey, className }: Props) => {
  const t = useI18n();
  return <span className={cn("font-bold", className)}>{t(tranlationKey)}</span>;
};
