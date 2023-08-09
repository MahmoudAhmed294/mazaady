import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns='http://www.w3.org/2000/svg' width='1em' height='1em'>
    <g data-name='Group 538'>
      <path fill='none' d='M17.065 17.065V0H0v17.065Z' data-name='Path 2885' />
    </g>
    <g data-name='Group 539'>
      <path
        fill='#414141'
        d='m2.681 12.635-1.259-1.259 7.11-7.11 7.11 7.11-1.258 1.259-5.852-5.852Z'
        data-name='Path 2886'
      />
    </g>
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
