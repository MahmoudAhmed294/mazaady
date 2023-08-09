import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns='http://www.w3.org/2000/svg' width='1em' height='1em'>
    <path
      fill='#e3e3e3'
      d='M11.116.937A3.2 3.2 0 0 0 8.849 0a3.225 3.225 0 0 0-2.267.937l-.532.532-.532-.532A3.2 3.2 0 0 0 3.251 0 3.263 3.263 0 0 0 .136 2.343a2.966 2.966 0 0 0 .734 3l4.787 4.787a.528.528 0 0 0 .76 0l4.673-4.673a3.165 3.165 0 0 0 .026-4.52Z'
      data-name='Path 2496'
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
