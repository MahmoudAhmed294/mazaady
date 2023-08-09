import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns='http://www.w3.org/2000/svg' width='1em' height='1em'>
    <path fill='none' d='M0 0h24v24H0Z' data-name='Path 2459' />
    <path
      fill='#fff'
      d='M12 22a2.006 2.006 0 0 0 2-2h-4a2 2 0 0 0 2 2Zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4a1.5 1.5 0 0 0-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29a1 1 0 0 0 .7 1.71h13.17a1 1 0 0 0 .71-1.71Z'
      data-name='Path 2460'
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
