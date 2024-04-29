import { Button, ImageShapeMakerSvg } from "@/components";
import { getI18n } from "@/utils/locales/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function DownloadAppSection() {
  const t = await getI18n();
  return (
    <section className="bg-[url('/download-app-background.svg')] bg-cover bg-no-repeat py-12">
      <div className="container flex items-center">
        <div className="w-[50%] flex justify-center items-center sm:w-full sm:flex-wrap">
          <ImageShapeMakerSvg
            screenshot="/screenshots/blanzin.svg"
            id="DownloadApp"
          />
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
