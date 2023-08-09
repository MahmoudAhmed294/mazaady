import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns='http://www.w3.org/2000/svg' width='1em' height='1em'>
    <path fill='none' d='M0 0h24v24H0Z' data-name='Path 6576' />
    <path
      fill='#fff'
      d='m12.36 6 .4 2H18v6h-3.36l-.4-2H7V6h5.36M14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6Z'
      data-name='Path 6577'
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
