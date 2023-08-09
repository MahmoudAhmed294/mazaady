import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='17.065'
    height='17.065'
    viewBox='0 0 17.065 17.065'
    {...props}
    >
    <g transform='rotate(90 8.533 8.533)'>
      <g data-name='Group 538'>
        <path fill='none' d='M0 0h17.065v17.065H0z' data-name='Path 2885'></path>
      </g>
      <g data-name='Group 539' transform='translate(4.43 1.422)'>
        <path
          fill={'#414141'}
          d='M0 12.962l1.259 1.258 7.11-7.11L1.259 0 0 1.259 5.852 7.11z'
          data-name='Path 2886'></path>
      </g>
    </g>
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
