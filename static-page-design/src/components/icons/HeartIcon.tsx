import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = ({
  width = 24,
  height = 24,
  color = "#fff",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns='http://www.w3.org/2000/svg' width={width} height={height}>
    <path fill='none' d='M0 0h24v24H0Z' data-name='Path 2461' />
    <path
      fill={color}
      d='M13.35 20.13a2 2 0 0 1-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28a5.459 5.459 0 0 1 2.34-4.29A5.8 5.8 0 0 1 12 5.09a5.784 5.784 0 0 1 7.66-1.1A5.459 5.459 0 0 1 22 8.28c.14 3.88-3.3 6.99-8.55 11.76l-.1.09Z'
      data-name='Path 2462'
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
