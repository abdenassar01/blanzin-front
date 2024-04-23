import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  tranlationKey: string;
  className?: string;
  values?: any;
};

export const TranslatedText = ({ tranlationKey, className, values }: Props) => {
  const t = useTranslations("");
  return <span className={className}>{t(tranlationKey, values)}</span>;
};

export const TranslatedHeading = ({
  tranlationKey,
  className,
  values,
}: Props) => {
  const t = useTranslations("");
  return (
    <span className={cn("font-bold", className)}>
      {t(tranlationKey, values)}
    </span>
  );
};
