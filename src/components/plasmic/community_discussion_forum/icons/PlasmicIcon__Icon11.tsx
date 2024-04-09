// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon11Icon(props: Icon11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.5 12a6.5 6.5 0 01-6.5 6.5V20a8 8 0 008-8h-1.5zM12 18.5A6.5 6.5 0 015.5 12H4a8 8 0 008 8v-1.5zM5.5 12A6.5 6.5 0 0112 5.5V4a8 8 0 00-8 8h1.5zM12 5.5a6.5 6.5 0 016.5 6.5H20a8 8 0 00-8-8v1.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M13.5 10a1.5 1.5 0 01-1.5 1.5V13a3 3 0 003-3h-1.5zM12 11.5a1.5 1.5 0 01-1.5-1.5H9a3 3 0 003 3v-1.5zM10.5 10A1.5 1.5 0 0112 8.5V7a3 3 0 00-3 3h1.5zM12 8.5a1.5 1.5 0 011.5 1.5H15a3 3 0 00-3-3v1.5zm-5.379 8.02a.75.75 0 101.153.96l-1.153-.96zm9.606.96a.75.75 0 101.152-.96l-1.152.96zm-8.453 0A5.487 5.487 0 0112 15.5V14a6.987 6.987 0 00-5.379 2.52l1.153.96zM12 15.5c1.698 0 3.216.769 4.227 1.98l1.152-.96A6.987 6.987 0 0012 14v1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon11Icon;
/* prettier-ignore-end */
