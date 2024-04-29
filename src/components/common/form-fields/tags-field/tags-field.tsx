"use client";

import * as React from "react";
import { Control, useFieldArray } from "react-hook-form";
import { useMemo, useState } from "react";

import { TranslatedHeading, TranslatedText } from "../../translated-text";
import { useTheme } from "next-themes";
import { cn } from "@/utils";
import Image from "next/image";

type Props = {
  control: Control<any>;
  label?: string;
  placeholder?: string;
  className?: string;
  name: string;
  items: string[];
  suggestions?: string[];
  buttonClassName?: string;
  maxSkills?: number;
};

export function TagsField({
  control,
  name,
  className,
  placeholder,
  label,
  items,
  buttonClassName,
  maxSkills = 9,
  suggestions,
}: Props) {
  const [text, setText] = useState<string>("");
  const [filteredSuggestion, setFilteredSuggestion] = useState<
    string[] | undefined
  >(suggestions);
  const { append, remove } = useFieldArray({ control, name });

  const { theme } = useTheme();
  const isDark = useMemo(() => theme === "dark", [theme]);

  function handleAppend() {
    if (text && items.length <= maxSkills) {
      append(text);
      setText("");
      setFilteredSuggestion(suggestions);
    }
  }

  return (
    <div>
      {items?.length > 0 && (
        <div style={{ gap: 5 }} className={cn("flex-row flex-wrap py-3")}>
          {React.Children.toArray(
            items.map((item, index) => (
              <div className="p-1 flex-row  rounded bg-backgroundSecondary dark:bg-backgroundSecondaryDark justify-between items-center">
                <TranslatedText className="max-w-[95%]" tranlationKey={item} />
                <button
                  onClick={() => {
                    remove(index);
                    filteredSuggestion &&
                      setFilteredSuggestion([...filteredSuggestion, item]);
                  }}
                >
                  <Image
                    className="w-3 h-3 m-1"
                    alt=""
                    src={
                      isDark
                        ? require("@/assets/images/icons/dark/close.svg")
                        : require("@/assets/images/icons/dark/close.svg")
                    }
                  />
                </button>
              </div>
            ))
          )}
        </div>
      )}
      <div className="h-[2px] mb-3 mt-1 w-[80%] ml-[10%] bg-secondary dark:bg-main rounded-full" />
      <div className="flex-row justify-between items-center">
        <input
          onChange={(e) => {
            const t = e.currentTarget.value;
            setText(t);
            if (t === "") {
              setFilteredSuggestion(suggestions);
              return;
            }
            setFilteredSuggestion(
              suggestions?.filter((item) =>
                item.toLowerCase().startsWith(t.toLowerCase())
              )
            );
          }}
          value={text}
          className={cn("", className)}
          placeholder={placeholder}
        />
        <button
          onClick={handleAppend}
          className={cn(
            "w-[15%] h-12 rounded mt-3 justify-center items-center bg-backgroundSecondary dark:bg-backgroundSecondaryDark",
            buttonClassName
          )}
        >
          <Image
            alt=""
            className="w-4 h-4"
            src={
              isDark
                ? require("@/assets/images/icons/dark/plus.svg")
                : require("@/assets/images/icons/dark/close.svg")
            }
          />
        </button>
      </div>
      {filteredSuggestion && (
        <div className="rounded p-2 bg-backgroundSecondary dark:bg-backgroundSecondaryDark">
          <TranslatedHeading
            className="text-xs mb-2"
            tranlationKey="forms.skills.suggestions"
          />
          <div className="max-h-[80px] flex flex-wrap gap-1 overflow-y-scroll">
            {React.Children.toArray(
              filteredSuggestion.map((item) => (
                <button
                  onClick={() => {
                    append(item);
                    setFilteredSuggestion(
                      filteredSuggestion?.filter(
                        (suggestion) => suggestion !== item
                      )
                    );
                  }}
                  className="p-1 flex-row  rounded bg-background dark:bg-backgroundDark justify-between items-center"
                >
                  <TranslatedText className="" tranlationKey={item} />
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
