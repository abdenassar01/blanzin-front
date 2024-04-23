"use client";

import React, { Dispatch, ReactNode, SetStateAction, useMemo } from "react";
import { TranslatedHeading } from "..";
import Image from "next/image";
import { cn } from "@/utils";
import { useTheme } from "next-themes";
import Rodal from "rodal";

type Props = {
  children: ReactNode;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  header?: string;
  className?: string;
};

export const Modal = ({
  visible,
  children,
  setVisible,
  header,
  className,
}: Props) => {
  const { theme } = useTheme();

  return (
    <Rodal
      width={350}
      height={331}
      customStyles={{ borderRadius: 20 }}
      onClose={() => setVisible(false)}
      visible={visible}
    >
      <div
        className={cn(
          "z-20 max-h-[60%] rounded-lg bg-background  dark:bg-backgroundDark",
          className
        )}
      >
        <div
          className={cn(
            "w-full p-2 flex flex-row bg-backgroundSecondary dark:bg-backgroundSecondaryDark rounded-lg items-center",
            header ? "justify-between" : "justify-end"
          )}
        >
          {header && (
            <TranslatedHeading
              className="text-secondary dark:text-main text-base"
              tranlationKey={header}
            />
          )}
          <button className="" onClick={() => setVisible(false)}>
            <Image
              alt=""
              className="w-4 h-4 "
              src={
                theme === "dark"
                  ? require("@/assets/images/icons/dark/close.svg")
                  : require("@/assets/images/icons/light/close.svg")
              }
            />
          </button>
        </div>
        <div className="p-4 max-h-[90%]">{children}</div>
      </div>
      <button
        className="h-full z-10 absolute w-full"
        onClick={() => setVisible(false)}
      />
    </Rodal>
  );
};
