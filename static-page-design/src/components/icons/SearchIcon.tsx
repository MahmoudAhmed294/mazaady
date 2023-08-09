import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns='http://www.w3.org/2000/svg' width={24} height={24}>
    <path fill='none' d='M0 0h24v24H0Z' data-name='Path 2457' />
    <path
      fill='#fff'
      d='M15.5 14h-.79l-.28-.27a6.51 6.51 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.494 4.494 0 0 1 9.5 14Z'
      data-name='Path 2458'
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
