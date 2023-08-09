import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  DefaultIcon: React.ElementType;
  hoverImage: StaticImageData;
};
const HoverIcon = ({ DefaultIcon: Icon, hoverImage }: Props) => {
  return (
    <div className='group'>
      <Icon className='w-6 h-6 text-white group-hover:hidden ease-in' />
      <Image
        src={hoverImage}
        alt='image'
        className='w-6 h-6  hidden group-hover:block ease-in object-cover'
        
      />
    </div>
  );
};

export default HoverIcon;
