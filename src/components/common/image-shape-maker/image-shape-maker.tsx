import * as React from "react";

type Props = {
  img: any;
  width: string;
  height?: string;
  muskId: string;
};

export function ImageShapeMaker({ img, width, muskId, height }: Props) {
  return (
    <svg
      width={width}
      height={height}
      baseProfile="full"
      className="boxshadow ml-auto overflow-hidden"
      version="1.2"
    >
      <defs>
        <mask
          id={muskId}
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
          transform="scale(1)"
        >
          <image width={width} height={height} xlinkHref="/iphone-mockup.svg" />
        </mask>
      </defs>
      <image
        className="overflow-hidden"
        id="the-mask"
        mask={`url(#${muskId})`}
        width={width}
        height={height}
        y="0"
        x="0"
        xlinkHref={img}
      />
    </svg>
  );
}
