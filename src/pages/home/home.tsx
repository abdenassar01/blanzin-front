"use client";

import {
  Button,
  CheckBox,
  FieldText,
  Link,
  LongTextToggle,
  Modal,
  ProgressBar,
  TranslatedText,
} from "@/components";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export function Home() {
  const [visible, setVisible] = useState<boolean>(false);
  const { control } = useForm();

  return (
    <div className="container flex-col items-center justify-between p-24 ">
      <div className="">
        <ProgressBar steps={5} currentStep={1} />
        <ProgressBar steps={5} currentStep={2} />
        <ProgressBar steps={5} currentStep={3} />
        <ProgressBar steps={5} currentStep={4} />
        <ProgressBar steps={5} currentStep={5} />
        <Button text="soukayna" onClick={() => setVisible((prev) => !prev)} />

        <LongTextToggle
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quibusdam illo hic totam deleniti eligendi cumque vel quas! Iusto animi maxime dolore quaerat ipsa autem in minus necessitatibus ducimus quae?"
          length={120}
        />

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
        <div className="h-10 bg-[url('/separator.svg')] " />
        <h1 className="text-2xl">
          <TranslatedText tranlationKey="title" />
        </h1>
      </div>
    </div>
  );
}
