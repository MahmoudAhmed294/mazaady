import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='1em'
    height='1em'
    data-name='Group 1337'>
    <defs>
      <radialGradient id='a' cx={0.17} cy={1.012} r={1.096} gradientUnits='objectBoundingBox'>
        <stop offset={0.355} stopColor='#ffc200' />
        <stop offset={0.508} stopColor='#ffbc06' />
        <stop offset={0.725} stopColor='#ffae18' />
        <stop offset={0.978} stopColor='#ff9736' />
        <stop offset={1} stopColor='#ff953a' />
      </radialGradient>
      <radialGradient xlinkHref='#a' id='b' cx={0.09} cy={1.284} r={1.584} />
    </defs>
    <path
      fill='url(#a)'
      d='M93.469 86.079c.067.458-.217.662-.632.455L89.4 84.8a1.908 1.908 0 0 0-1.507-.008L84.44 86.5c-.415.2-.7 0-.627-.462l.585-3.8a1.914 1.914 0 0 0-.46-1.435l-2.685-2.763c-.323-.333-.214-.665.243-.739l3.8-.619a1.911 1.911 0 0 0 1.224-.882l1.794-3.406c.216-.41.565-.407.777 0l1.763 3.421a1.909 1.909 0 0 0 1.216.891l3.793.652c.458.079.564.414.238.742l-2.711 2.735a1.922 1.922 0 0 0-.472 1.432Z'
      data-name='Path 6586'
      transform='translate(-81.067 -72.088)'
    />
    <path
      fill='url(#b)'
      d='M88.7 72.277c.072 0 .154.077.221.207l1.763 3.422a2.087 2.087 0 0 0 1.352.99l3.793.653c.144.023.242.078.265.148s-.027.17-.13.274l-2.708 2.735a2.084 2.084 0 0 0-.525 1.592l.551 3.808a.376.376 0 0 1-.04.281.127.127 0 0 1-.106.039.506.506 0 0 1-.213-.061l-3.439-1.732a2.088 2.088 0 0 0-1.675-.008l-3.452 1.7a.506.506 0 0 1-.212.061.127.127 0 0 1-.107-.042.37.37 0 0 1-.039-.28l.585-3.8a2.086 2.086 0 0 0-.511-1.6l-2.686-2.759c-.1-.1-.149-.208-.127-.275s.122-.122.266-.146l3.8-.619a2.087 2.087 0 0 0 1.36-.979l1.792-3.407c.068-.127.151-.2.222-.2m0-.189a.477.477 0 0 0-.389.307L86.518 75.8a1.911 1.911 0 0 1-1.224.882l-3.8.619c-.458.074-.566.406-.243.739l2.687 2.76a1.914 1.914 0 0 1 .46 1.435l-.585 3.8c-.053.339.088.54.332.54a.666.666 0 0 0 .3-.078l3.452-1.7a1.923 1.923 0 0 1 1.503.003l3.437 1.732a.692.692 0 0 0 .3.081c.241 0 .382-.2.333-.536l-.552-3.809a1.922 1.922 0 0 1 .472-1.432L96.1 78.1c.325-.328.219-.662-.238-.742l-3.793-.652a1.909 1.909 0 0 1-1.216-.891L89.088 72.4c-.106-.207-.246-.31-.389-.31Z'
      data-name='Path 6587'
      opacity={0.5}
      style={{
        mixBlendMode: "multiply",
        isolation: "isolate",
      }}
      transform='translate(-81.067 -72.088)'
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;