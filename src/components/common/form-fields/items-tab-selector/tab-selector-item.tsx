import React from "react";
import { TranslatedText } from "../..";
import { cn } from "@/utils";

type Props = {
  selected: boolean;
  handleSelect: (item: any) => any;
  text: string;
};

export default function TabSelectorItem({
  handleSelect,
  selected,
  text,
}: Props) {
  return (
    <button
      onClick={handleSelect}
      className={cn(
        "px-3 py-2 rounded ",
        selected
          ? "bg-secondary dark:bg-main "
          : "bg-background dark:bg-backgroundDark"
      )}
    >
      <TranslatedText
        className={cn(
          selected
            ? "text-background dark:text-backgroundDark"
            : "text-secondary dark:text-main "
        )}
        tranlationKey={text}
      />
    </button>
  );
}
