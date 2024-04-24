import React from "react";
import { Control } from "react-hook-form";
import { Map, RatingQuestion } from "../..";
import { Question } from "@/types";

type Props = {
  control: Control<any>;
  questions: Question[];
  defaultValues?: number[];
};

export function RatingMultipleQuestions({
  control,
  questions,
  defaultValues = [],
}: Props) {
  return (
    <div className="p-3 rounded-md bg-backgroundSecondary dark:bg-backgroundSecondaryDark">
      <Map
        items={questions}
        render={(question, index) => (
          <>
            <RatingQuestion
              control={control}
              name={`question-${question.id}`}
              question={question}
              defaultValue={defaultValues[index] && defaultValues[index]}
            />
            {index < questions.length - 1 && questions.length && (
              <div className="h-[1px] w-full rounded-full bg-background dark:bg-backgroundDark" />
            )}
          </>
        )}
      />
    </div>
  );
}
