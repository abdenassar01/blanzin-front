import { Button } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  header: string;
  action: string;
  href: string;
};

export function HeroSection({ action, header, href }: Props) {
  return (
    <div className="container main-background-gradient rounded-xl w-full flex justify-center items-center my-12 py-12 bg-main shadow-md shadow-secondary mb-6">
      <div className="flex sm:flex-col gap-10 w-[85%]">
        <Image
          className="w-[30vw] sm:w-[90vw]"
          width={350}
          height={275}
          alt=""
          src="/video.png"
        />
        <div className="w-full flex justify-center flex-col gap-10">
          <h3 className="font-bold whitespace-pre-line text-secondary text-xbase">
            {header}
          </h3>
          <Button className="rounded-xl group" theme="secondary" width="40%">
            <Link
              className="font-semibold text-main group-hover:text-secondary"
              href={href}
            >
              {action}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
