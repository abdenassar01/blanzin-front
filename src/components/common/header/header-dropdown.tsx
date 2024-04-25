"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { cn, useOnHoverOutside } from "@/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Props = {
  item: {
    id: number;
    text: string;
    super: boolean;
    items: {
      id: number;
      text: string;
      link: string;
    }[];
  };
  className: string;
};

export function HeaderDropDown({ item, className }: Props) {
  const pathname = usePathname();

  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const dropdownRef = useRef(null);
  useOnHoverOutside(dropdownRef, () => setOpenDropDown(false));

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onMouseMove={() => setOpenDropDown(true)}
        key={`nav-item-${item.text}`}
        className={cn(
          "flex rounded bg-transparent p-0 text-text hover:text-title",
          className
        )}
      >
        <div>{item.text}</div>
        <Image
          className={cn(
            "size-4 ml-1 mt-1 transition-all duration-500",
            openDropDown ? "rotate-180" : ""
          )}
          src={require("@/assets/images/icons/arrow-down.svg")}
          alt="select"
        />
      </button>
      <div className="size-36 left-[-20px] absolute" />
      <div
        onMouseLeave={() => setOpenDropDown(false)}
        className={cn(
          "min-w-[220px] flex flex-col shadow-md bg-white absolute transition-all duration-500 top-[70px] left-[-20px] rounded border-t-4 border-primary",
          openDropDown ? "opacity-100  top-[30px]" : "opacity-0"
        )}
      >
        {openDropDown &&
          React.Children.toArray(
            item.items.map((link) => (
              <Link
                href={link?.link || ""}
                className={cn(
                  "p-2 px-4 rounded bg-transparent text-text hover:text-title",
                  pathname === link?.link ? "text-primary" : "",

                  className
                )}
              >
                <div className="">{link.text}</div>
              </Link>
            ))
          )}
      </div>
    </div>
  );
}
