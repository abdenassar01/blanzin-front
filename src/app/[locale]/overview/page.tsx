import { redirect } from "next/navigation";
import React from "react";

export default function Overview() {
  redirect("/overview/customer");
  return null;
}
