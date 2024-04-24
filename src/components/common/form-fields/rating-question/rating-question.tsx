"use client";

import React from "react";
import { Control, useController } from "react-hook-form";
import { Map, TranslatedText } from "../..";
import { Question } from "@/types";
import Image from "next/image";

type Props = {
  control: Control<any>;
  name: string;
  question: Question;
  defaultValue?: number;
};

export function RatingQuestion({ question, control, name }: Props) {
  const {
    field: { onChange, value },
  } = useController({ name, control });

  return (
    <div className="my-2">
      <TranslatedText tranlationKey={question.en} />
      <div className="flex-row gap-1 justify-center items-center">
        <Map
          items={Array.from([1, 2, 3, 4, 5])}
          render={(item) => (
            <button
              onMouseEnter={() => onChange(item)}
              className="justify-center items-center"
            >
              <Image
                alt="star rating"
                className="w-[30px]  my-2"
                src={
                  value >= item
                    ? require("@/assets/images/icons/star-filled.svg")
                    : require("@/assets/images/icons/star-empty.svg")
                }
              />
            </button>
          )}
        />
      </div>
    </div>
  );
}
