import { Button, ImageShapeMakerSvg } from "@/components";
import { cn } from "@/utils";
import { getI18n } from "@/utils/locales/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function DownloadAppSection() {
  const t = await getI18n();
  return (
    <section className="bg-[url('/download-app-background.svg')] bg-cover bg-no-repeat py-12">
      <div className="container flex items-center">
        <div className="w-[50%] relative flex justify-center items-center sm:w-full sm:flex-wrap">
          <ImageShapeMakerSvg
            screenshot="/screenshots/blanzin.svg"
            id="DownloadApp"
          />
          <Link
            className="absolute right-14 top-[65%] font-medium p-2 text-xs bg-main rounded w-[150px] items-center flex gap-1  text-backgroundDark"
            href="https://play.google.com"
            target="_blank"
          >
            <Image
              className="w-[2vw] sm:w-[8vw]"
              src={require("@/assets/images/icons/apple.svg")}
              alt=""
            />

            <span>{t("links.app-store")}</span>
          </Link>
          <Link
            target="_blank"
            className="absolute right-14 top-[50%] font-medium p-2 text-xs bg-main rounded w-[150px] items-center flex gap-1  text-backgroundDark"
            href="https://play.google.com"
          >
            <Image
              className="w-[2vw] sm:w-[8vw]"
              src={require("@/assets/images/icons/play-store.svg")}
              alt=""
            />

            <span>{t("links.play-store")}</span>
          </Link>
        </div>

        <div className="w-[40%] gap-12 flex flex-col items-center sm:w-full">
          <h3 className="text-main font-bold text-4xl">
            {t("download-app-heading")}
          </h3>
          <Image
            src="/app-qr.png"
            alt="blanzin qr code"
            width={200}
            height={200}
          />
          <Button theme="secondary" className="group rounded-full ">
            <Link
              className="text-main group-hover:text-secondary"
              href="/download-app"
            >
              {t("download-app-btn-text")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
