import React, { ReactNode } from "react";
import { UseFieldArrayAppend } from "react-hook-form";

type Props = {
  children: ReactNode;
  append: UseFieldArrayAppend<any, string>;
  callBack?: () => any;
  name?: string;
};

export function PictureUpload({ children, append, callBack, name }: Props) {
  return (
    <label className="cursor-pointer" htmlFor={name}>
      <input
        id={name}
        onChange={(e) => {
          append(e.currentTarget.value);
          callBack && callBack();
        }}
        type="file"
        className="hidden"
      />
      {children}
    </label>
  );
}
