"use client";

import React, { useState } from "react";
import { Map, TranslatedText } from "../../..";
import { Control, useController } from "react-hook-form";
import TabSelectorItem from "./tab-selector-item";
import { cn } from "@/utils";

type Props<T> = {
  items: T[];
  extractValue: (item: T) => any;
  extractDisplayMember: (item: T) => any;
  name: string;
  control: Control<any>;
  label: string;
};

export function ItemsTabSelector<T>({
  extractDisplayMember,
  extractValue,
  items,
  control,
  label,
  name,
}: Props<T>) {
  const [ShowSubCategories, setShowCategories] = useState<boolean>(false);

  const {
    field: { onChange, value },
  } = useController({ name, control, defaultValue: [] });

  const handleOptionPress = (option: T) => {
    const isExist =
      value.filter((item: T) => extractValue(item) === extractValue(option))
        .length > 0;
    if (isExist) {
      onChange(
        value.filter((item: T) => extractValue(item) !== extractValue(option))
      );
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <div className="relative">
      <button
        className={cn(
          "my-3 rounded-md bg-backgroundSecondary w-full pl-2 py-3  dark:bg-backgroundSecondaryDark"
        )}
        onClick={() => setShowCategories((prev) => !prev)}
      >
        <TranslatedText
          className="text-secondary dark:text-main text-sm font-bold"
          tranlationKey={label}
        />
      </button>
      <div
        className={cn(
          "top-[85%] absolute transition-all w-full z-20 rounded-lg  bg-backgroundSecondary dark:bg-backgroundSecondaryDark",
          ShowSubCategories ? "h-[200px]" : "h-0"
        )}
      >
        <div
          className={cn(
            "p-3 gap-1 flex-wrap",
            ShowSubCategories ? "flex" : "hidden"
          )}
        >
          <Map
            items={items}
            render={(item) => (
              <TabSelectorItem
                handleSelect={() => handleOptionPress(item)}
                selected={
                  value.filter(
                    (option: any) => extractValue(option) === extractValue(item)
                  ).length > 0
                }
                text={extractDisplayMember(item)}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}
