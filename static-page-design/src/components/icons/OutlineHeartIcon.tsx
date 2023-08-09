import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns='http://www.w3.org/2000/svg' width='1em' height='1em'>
    <path
      fill='none'
      stroke='#fff'
      strokeWidth={2}
      d='M14.699 2.151A3.934 3.934 0 0 0 11.915 1a3.961 3.961 0 0 0-2.784 1.151l-.653.653-.653-.653A3.934 3.934 0 0 0 5.041 1a4.008 4.008 0 0 0-3.826 2.878 3.642 3.642 0 0 0 .9 3.686l5.88 5.88a.648.648 0 0 0 .933 0l5.74-5.74a3.887 3.887 0 0 0 .031-5.553Z'
      data-name='Path 2496'
    />
  </svg>
);

const Memo = memo(SvgComponent);
export default Memo;
