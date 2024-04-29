"use client";

import React from "react";
import { routes } from "@/configs/routes";
import { ActiveLink } from "../active-link/active-link";
import { useI18n } from "@/utils/locales/client";

export default function DesktopNavbar() {
  const t = useI18n();
  return (
    <div className="sm:hidde mr-5 flex items-center gap-5">
      {React.Children.toArray(
        routes.map((item) => (
          <ActiveLink link={item.link || ""}>{t(item.text)}</ActiveLink>
        ))
      )}
    </div>
  );
}
