"use client";

import { useOnHoverOutside } from "@/utils";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function LanguagesToggle() {
  const dropdownRef = useRef(null);

  const [showLanguesDropdown, setShowLanguesDropdown] =
    useState<boolean>(false);

  const closeDropdown = () => {
    setShowLanguesDropdown(false);
  };

  useOnHoverOutside(dropdownRef, closeDropdown);

  return (
    <div className="">
      <div onMouseMove={() => setShowLanguesDropdown(true)}>
        <Image
          className="w-[2.5vw] h-auto sm:w-[8vw]"
          src={require("@/assets/images/svg/language.svg")}
          alt="language"
        />
      </div>
      <div className="bg-tertiary">halo</div>
    </div>
  );
}
