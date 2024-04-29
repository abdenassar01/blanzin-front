import {
  Button,
  Heading,
  ImageShapeMaker,
  ImageShapeMakerSvg,
} from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  heading: string;
  paragraph: string;
  callToActionText: string;
  buttonText: string;
  href: string;
  screenshot: string;
};

export function CallToAction({
  buttonText,
  callToActionText,
  heading,
  href,
  paragraph,
  screenshot,
}: Props) {
  return (
    <section className="bg-backgroundSecondary dark:bg-backgroundSecondaryDark py-12">
      <div className="flex container justify-center items-center">
        <div className="flex flex-col justify-center gap-8 w-[60%] sm:w-full">
          <div className="text-2xl">
            <Heading className="" heading={heading} />
          </div>
          <p className="text-secondary dark:text-textdark w-[80%] sm:w-[full]">
            {paragraph}
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: callToActionText }}
            className="text-xbase text-secondary prose-strong:uppercase prose-strong:text-xxl"
          />
          <Button className="group" theme="secondary" width="40%">
            <Link
              className="font-semibold text-main group-hover:text-secondary"
              href={href}
            >
              {buttonText}
            </Link>
          </Button>
        </div>
        <div className="w-[40%] flex justify-center items-center">
          <div className="">
            <ImageShapeMakerSvg id={screenshot} screenshot={screenshot} />
          </div>
        </div>
      </div>
    </section>
  );
}
