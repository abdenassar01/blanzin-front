import * as React from "react";
import { Control, useController } from "react-hook-form";
import { TranslatedHeading, TranslatedText } from "../../translated-text";
import { useTheme } from "next-themes";
import { cn } from "@/utils";
import Image from "next/image";

type Props = {
  control: Control<any>;
  name: string;
};

const tabs = [
  {
    id: 1,
    title: "Trainee",
    darkIcon: require("@/assets/images/icons/select-profile/dark/trainee.png"),
    icon: require("@/assets/images/icons/select-profile/light/trainee.png"),
  },
  {
    id: 2,
    title: "Skilled worker",
    darkIcon: require("@/assets/images/icons/select-profile/dark/german-trainee.png"),
    icon: require("@/assets/images/icons/select-profile/light/german-trainee.png"),
  },
];

export function ApplicationTypeSelector({ control, name }: Props) {
  const {
    field: { onChange, value },
  } = useController({ control, name, defaultValue: tabs[0].id });

  const { theme } = useTheme();
  const isDark = React.useMemo(() => theme === "dark", [theme]);

  return (
    <div className="p-2 rounded-xl bg-backgroundSecondary dark:bg-backgroundSecondaryDark">
      <TranslatedHeading
        className="text-base text-secondary dark:text-main text-center"
        tranlationKey="forms.profile-type-header"
      />
      <div className="flex justify-between mt-3">
        {React.Children.toArray(
          tabs.map((item) => (
            <button
              onClick={() => onChange(item.id)}
              className={cn(
                "w-[49%] rounded p-3 flex flex-col justify-center items-center ",
                value === item.id
                  ? "bg-secondary dark:bg-main"
                  : "bg-background dark:bg-backgroundDark"
              )}
            >
              <Image
                alt=""
                className="w-16 h-16"
                src={
                  value === item.id
                    ? isDark
                      ? item.icon
                      : item.darkIcon
                    : isDark
                    ? item.darkIcon
                    : item.icon
                }
              />

              <TranslatedText
                className={cn(
                  "font-bold",
                  value === item.id
                    ? "text-main dark:text-secondary"
                    : "text-secondary dark:text-main"
                )}
                tranlationKey={item.title}
              />
            </button>
          ))
        )}
      </div>
    </div>
  );
}
