import { Button } from "@/components/common";
import { getI18n } from "@/utils/locales/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function FindExpertsSteps() {
  const t = await getI18n();

  const steps = [
    {
      number: 1,
      icon: "/steps/step-1.jpg",
      text: t("steps.find-expert-step-one"),
    },
    {
      number: 2,
      icon: "/steps/step-2.jpg",
      text: t("steps.find-expert-step-two"),
    },
    {
      number: 3,
      icon: "/steps/step-3.jpg",
      text: t("steps.find-expert-step-three"),
    },
  ];

  return (
    <div className="pt-12 container">
      <h2 className="text-xm mb-5 text-secondary dark:text-main font-bold">
        {t("steps.big-header")}
      </h2>
      <div className="flex justify-between ">
        {React.Children.toArray(
          steps.map((item) => (
            <div className="flex flex-col justify-center items-center gap-3">
              <Image
                alt={item.text}
                src={item.icon}
                width={200}
                height={200}
                className="rounded-full w-[200px] aspect-square"
              />
              <div className="flex justify-center items-center">
                <div className="text-center font-bold text-main px-3 py-1 rounded-full w-fit bg-secondary">
                  {`${t("steps.heading")} ${item.number}`}
                </div>
              </div>
              <p className="font-bold text-secondary w-[220px] text-center text-base">
                {item.text}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
