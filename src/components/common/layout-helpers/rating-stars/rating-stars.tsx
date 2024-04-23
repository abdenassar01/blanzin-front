import Image from "next/image";
import React from "react";

type Props = {
  rating: number;
  size?: number;
  textClassName?: string;
};

export function RatingStars({ rating, textClassName, size = 15 }: Props) {
  return (
    <div style={{ gap: 2 }} className="flex-row items-center">
      <span className={textClassName}>{rating}</span>
      {React.Children.toArray(
        [...Array(Math.floor(rating))].map(() => (
          <Image
            alt=""
            style={{ height: size, width: size }}
            src={require("../../../../assets/icons/star.png")}
          />
        ))
      )}
      {rating > Math.floor(rating) && (
        <Image
          alt=""
          style={{ height: size, width: size }}
          src={require("../../../../assets/icons/star-half.png")}
        />
      )}
    </div>
  );
}
