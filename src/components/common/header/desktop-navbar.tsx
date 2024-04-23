import React from "react";
import { TranslatedText } from "../translated-text";
import { DateTimeFormatter } from "../date-formatter";

export default function DesktopNavbar() {
  return (
    <div className="hiddem lg:flex">
      <div className="">
        <DateTimeFormatter time="2024-2-10" />
      </div>
    </div>
  );
}
