import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns='http://www.w3.org/2000/svg' width='1em' height='1em'>
    <g data-name='Group 1269'>
      <path fill='none' d='M0 0h24v24H0Z' data-name='Path 6431' />
    </g>
    <g data-name='Group 1270'>
      <path
        fill='#fff'
        d='M20 4H4a1.985 1.985 0 0 0-1.99 2L2 18a1.993 1.993 0 0 0 2 2h16a1.993 1.993 0 0 0 2-2V6a1.993 1.993 0 0 0-2-2Zm-9 6H8v1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1 1 1 1 0 0 1-1-1H7a1 1 0 0 1-1-1 1 1 0 0 1 1-1h3v-1H7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1a1 1 0 0 1 1-1 1 1 0 0 1 1 1h1a1 1 0 0 1 1 1 1 1 0 0 1-1 1Zm4.65 5.9L14 14.25h4l-1.65 1.65a.5.5 0 0 1-.7 0ZM14 10l1.65-1.65a.5.5 0 0 1 .71 0L18 10Z'
        data-name='Path 6432'
      />
    </g>
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
