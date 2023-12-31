import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns='http://www.w3.org/2000/svg' width='1em' height='1em'>
    <path fill='none' d='M0 0h24v24H0Z' data-name='Path 6615' />
    <path
      fill='#fefefe'
      d='M18 16.08a2.912 2.912 0 0 0-1.96.77L8.91 12.7A3.274 3.274 0 0 0 9 12a3.274 3.274 0 0 0-.09-.7l7.05-4.11A2.993 2.993 0 1 0 15 5a3.274 3.274 0 0 0 .09.7L8.04 9.81a3 3 0 1 0 0 4.38l7.12 4.16a2.821 2.821 0 0 0-.08.65A2.92 2.92 0 1 0 18 16.08ZM18 4a1 1 0 1 1-1 1 1 1 0 0 1 1-1ZM6 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm12 7.02a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z'
      data-name='Path 6616'
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
