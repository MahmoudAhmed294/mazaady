import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns='http://www.w3.org/2000/svg' width='1em' height='1em'>
    <g fill='#fefefe' data-name={9} opacity={0.61}>
      <circle
        cx={1.739}
        cy={1.739}
        r={1.739}
        data-name='Ellipse 321'
        transform='translate(6.376 3.425)'
      />
      <path
        d='m15.501 3.425-.632-.632a9.557 9.557 0 0 0-13.5 0l-.632.632a2.5 2.5 0 0 0 0 3.535l.632.632a9.557 9.557 0 0 0 13.5 0l.632-.632a2.5 2.5 0 0 0 0-3.535ZM8.117 8.062a2.9 2.9 0 1 1 2.9-2.9 2.9 2.9 0 0 1-2.9 2.9Z'
        data-name='Path 7949'
      />
    </g>
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
