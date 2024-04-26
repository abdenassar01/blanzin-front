import React from "react";
import { routes } from "@/configs/routes";
import { ActiveLink } from "../active-link/active-link";
import { getI18n } from "@/utils/locales/server";

export default async function DesktopNavbar() {
  const t = await getI18n();
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
