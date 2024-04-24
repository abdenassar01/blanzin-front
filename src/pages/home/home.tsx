"use client";

import {
  Button,
  CheckBox,
  DatePicker,
  DescriptionField,
  Dropdown,
  FieldText,
  Link,
  LongTextToggle,
  Modal,
  PaymentPackSelector,
  ProgressBar,
  TagsField,
  TranslatedText,
} from "@/components";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export function Home() {
  const [visible, setVisible] = useState<boolean>(false);
  const { control, watch } = useForm({
    defaultValues: {
      description: [],
    },
  });

  return (
    <div className="container flex flex-col items-center justify-between py-24 ">
      <div className="">
        <ProgressBar steps={5} currentStep={1} />
        <ProgressBar steps={5} currentStep={2} />
        <ProgressBar steps={5} currentStep={3} />
        <ProgressBar steps={5} currentStep={4} />
        <ProgressBar steps={5} currentStep={5} />
        <Button text="Hallo" onClick={() => setVisible((prev) => !prev)} />

        <LongTextToggle
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quibusdam illo hic totam deleniti eligendi cumque vel quas! Iusto animi maxime dolore quaerat ipsa autem in minus necessitatibus ducimus quae?"
          length={120}
        />
        <div className="bg-backgroundSecondary p-2 flex gap-1">
          <DescriptionField
            control={control}
            placeholder="forms.labels.description"
            className="bg-background dark:bg-backgroundDark"
            items={[
              "Hallo",
              "helo world",
              "This isd a test",
              "This isd  test",
              "This is a test",
              "This isd a test 1",
              "This isd a test 2",
              "This isd a test 3",
              "This eisd a test 4",
              "This xisd a test 4",
              "Thiss isd a test 4",
              "This xisd a test 4",
              "This deisd a test 4",
              "This xcisd a test 4",
              "Thuis isd a test 4",
              "This isd a test 2",
              "This isd a test 3",
              "This eisd a test 4",
              "This xisd a test 4",
              "Thiss isd a test 4",
              "This xisd a test 4",
              "This deisd a test 4",
              "This xcisd a test 4",
              "Thuis isd a test 4",
            ]}
            label="hello"
            name="description"
          />
          <div className="w-[100%] bg-background p-2">
            <Dropdown
              extractDisplayMember={(item) => item.label}
              extractValueMember={(item) => item.value}
              control={control}
              name="drop1"
              label="The label"
              items={[
                { value: "test", label: "Test first" },
                { value: "test1", label: "Test second" },
                { value: "test2", label: "Test third" },
                { value: "test3", label: "Test fourd" },
                { value: "test4", label: "Test five" },
              ]}
            />

            <DatePicker
              control={control}
              label="Date"
              selectRange
              name="date"
              defaultDate={new Date()}
            />
          </div>
        </div>
        {/* <Modal visible={visible} setVisible={setVisible}> */}
        <TranslatedText tranlationKey="hallo" />
        <FieldText
          control={control}
          label="hallo"
          placeholder="hallo"
          name="something"
        />
        <Link text="hallo" url="https://glovo.com" newTab />
        {/* </Modal> */}
        <CheckBox control={control} label="Hallo" name="checkbox" />
        <div className="h-20 bg-[url('/separator.svg')] bg-no-repeat " />
        <h1 className="text-2xl">
          <TranslatedText tranlationKey="title" />
        </h1>
      </div>
    </div>
  );
}
