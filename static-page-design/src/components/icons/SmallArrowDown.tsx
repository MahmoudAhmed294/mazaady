import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns='http://www.w3.org/2000/svg' width='1em' height='1em'>
    <defs>
      <filter id='a' width={135} height={135} x={0} y={0} filterUnits='userSpaceOnUse'>
        <feOffset dx={3} dy={5} />
        <feGaussianBlur result='blur' stdDeviation={18.5} />
        <feFlood floodOpacity={0.161} />
        <feComposite in2='blur' operator='in' />
        <feComposite in='SourceGraphic' />
      </filter>
    </defs>
    <g data-name='Group 2553'>
      <g filter='url(#a)'>
        <rect
          width={24}
          height={24}
          fill='#fff'
          data-name='ruffa-jane-reyes-dlGhQPIstkQ-unsplash'
          rx={4}
          transform='rotate(180 38.25 37.25)'
        />
      </g>
      <g data-name='Group 538'>
        <path fill='none' d='M55.967 53.968v17.065h17.065V53.968Z' data-name='Path 2885' />
      </g>
      <g data-name='Group 539'>
        <path
          fill='#414141'
          d='m70.351 58.398 1.259 1.259-7.11 7.11-7.11-7.11 1.258-1.259L64.5 64.25Z'
          data-name='Path 2886'
        />
      </g>
    </g>
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
