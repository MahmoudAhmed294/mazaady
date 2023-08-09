import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns='http://www.w3.org/2000/svg' width='1em' height='1em'>
    <path
      fill='#fff'
      d='M8.2 8.2a1.4 1.4 0 0 0 .187-.235l5.565-5.566A1.392 1.392 0 0 0 11.985.428l-4.793 4.8L2.374.41A1.391 1.391 0 1 0 .407 2.377l5.591 5.591a1.444 1.444 0 0 0 2.2.235Z'
      data-name='Path 2341'
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
