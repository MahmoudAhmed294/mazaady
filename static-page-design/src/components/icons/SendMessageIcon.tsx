import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns='http://www.w3.org/2000/svg' width='1em' height='1em'>
    <defs>
      <linearGradient id='a' x1={0.5} x2={0.5} y2={1} gradientUnits='objectBoundingBox'>
        <stop offset={0} stopColor='#d20653' />
        <stop offset={1} stopColor='#9b0257' />
      </linearGradient>
    </defs>
    <g data-name='Group 5452' transform='translate(-447 -849)'>
      <circle
        cx={22}
        cy={22}
        r={22}
        fill='url(#a)'
        data-name='Ellipse 1468'
        transform='translate(447 849)'
      />
      <g data-name='send_black_24dp (3)'>
        <path fill='none' d='M481 860h-24v24h24Z' data-name='Path 6628' />
        <path
          fill='#fefefe'
          d='m476.99 866.03-7.51 3.22 7.52-1-.01-2.22m-7.5 8.72 7.51 3.22v-2.22l-7.51-1m9.5-11.75.01 7-15 2 15 2-.01 7-20.99-9Z'
          data-name='Path 6629'
        />
      </g>
    </g>
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
