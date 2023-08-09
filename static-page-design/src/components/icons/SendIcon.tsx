import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    data-name='send_black_24dp (3)'>
    <path fill='none' d='M24 0H0v24h24Z' data-name='Path 6628' />
    <path
      fill='#fefefe'
      d='m19.99 6.03-7.51 3.22 7.52-1-.01-2.22m-7.5 8.72L20 17.97v-2.22l-7.51-1M21.99 3l.01 7-15 2 15 2-.01 7L1 12Z'
      data-name='Path 6629'
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
