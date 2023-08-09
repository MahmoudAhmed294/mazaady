import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns='http://www.w3.org/2000/svg' width={14} height={10}>
    <path
      fill='#d20653'
      d='M5.342 5.341a.914.914 0 0 0 .122-.153l3.625-3.625A.907.907 0 0 0 7.807.281L4.685 3.4 1.547.265A.907.907 0 1 0 .265 1.547l3.642 3.641a.94.94 0 0 0 1.434.153Z'
      data-name='Path 2341'
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
