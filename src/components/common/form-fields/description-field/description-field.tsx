"use client";

import * as React from "react";
import { Control, useFieldArray, useWatch } from "react-hook-form";
import { TranslatedHeading } from "../../translated-text";
import { useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/utils";
import Image from "next/image";

type Props = {
  control: Control<any>;
  items: string[];
  className?: string;
  label: string;
  placeholder?: string;
  name: string;
};

export function DescriptionField({
  label,
  placeholder,
  items,
  className,
  control,
  name,
}: Props) {
  const [filteredItems, setFilteredItems] = useState<string[]>(items);
  const [filterValue, setFilterValue] = useState<string>("");

  const { theme } = useTheme();
  const isDark = useMemo(() => theme === "dark", [theme]);

  const { append, remove } = useFieldArray({
    control,
    name,
  });

  const { description } = useWatch({ control });

  function handleAppend() {
    if (filterValue) {
      append(filterValue);
      setFilterValue("");
    }
  }

  return (
    <div className="mb-2 w-full">
      <TranslatedHeading
        className="text-sm text-secondary dark:text-main mb-1"
        tranlationKey={label}
      />
      {description.length > 0 && (
        <div
          className={cn(
            "flex flex-wrap p-2 mb-1 gap-1 overflow-y-scroll h-[10.5vw] sm:h-[36.5vw] bg-background dark:bg-backgroundDark rounded",
            className
          )}
        >
          {React.Children.toArray(
            description.map((item: string, index: number) => (
              <div className="flex p-2 h-fit rounded bg-backgroundSecondary dark:bg-backgroundSecondaryDark flex-row items-center w-fit justify-between">
                <h2 className="">{item}</h2>
                <button
                  onClick={() => {
                    remove(index);
                  }}
                >
                  <Image
                    className="w-3 h-3 m-1"
                    alt="close"
                    src={
                      isDark
                        ? require("@/assets/images/icons/dark/close.svg")
                        : require("@/assets/images/icons/light/close.svg")
                    }
                  />
                </button>
              </div>
            ))
          )}
        </div>
      )}
      <div>
        <div className="flex flex-row gap-2 justify-between">
          <input
            className={cn("h-[50px] w-full rounded px-2", className)}
            onChange={(e) => {
              const text = e.currentTarget.value;
              setFilterValue(text);
              if (text === "") {
                setFilteredItems(items);
              } else {
                setFilteredItems(
                  items.filter((item) =>
                    item
                      .toLocaleLowerCase()
                      .includes(filterValue.toLocaleLowerCase())
                  )
                );
              }
            }}
            value={filterValue}
            placeholder={placeholder}
          />
          <button
            onClick={handleAppend}
            className="w-[4vw] sm:w-[15vw] h-auto flex rounded justify-center items-center  bg-background dark:bg-backgroundDark"
          >
            <Image
              alt="plus"
              className="w-5 h-5"
              src={
                isDark
                  ? require("@/assets/images/icons/dark/plus.svg")
                  : require("@/assets/images/icons/dark/plus.svg")
              }
            />
          </button>
        </div>
        <div className="flex flex-wrap rounded gap-1 w-full mt-1 h-[10.5vw] sm:h-[36.5vw] overflow-y-scroll p-2 bg-background dark:bg-backgroundDark">
          {React.Children.toArray(
            filteredItems.map(
              (item) =>
                description.filter((el: string) => el === item).length ===
                  0 && (
                  <button
                    className="p-2 h-fit rounded bg-backgroundSecondary dark:bg-backgroundSecondaryDark"
                    onClick={() => {
                      append(item);
                      setFilterValue("");
                      setFilteredItems(items);
                    }}
                  >
                    <h2 className="">{item}</h2>
                  </button>
                )
            )
          )}
        </div>
      </div>
    </div>
  );
}
