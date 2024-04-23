import React, { ReactNode } from "react";

type Props = {
  children: ReactNode | Iterable<ReactNode>;
  size?: number;
  vertical?: number;
  horizontal?: number;
};

export function Padding({
  children,
  size = 12,
  vertical = 0,
  horizontal = 0,
}: Props) {
  return (
    <div
      style={{
        paddingLeft: horizontal || size,
        paddingRight: horizontal || size,
        paddingTop: vertical || size,
        paddingBottom: vertical || size,
      }}
    >
      {children}
    </div>
  );
}

export function Margin({
  children,
  size = 12,
  vertical = 0,
  horizontal = 0,
}: Props) {
  return (
    <div
      style={{
        marginLeft: horizontal || size,
        marginRight: horizontal || size,
        marginTop: vertical || size,
        marginBottom: vertical || size,
      }}
    >
      {children}
    </div>
  );
}

export function Spacer({
  size = 10,
  horizontal = 0,
  vertical = 0,
}: Omit<Props, "children">) {
  return (
    <div
      style={{
        height: vertical || size,
        width: horizontal || size,
      }}
    />
  );
}
