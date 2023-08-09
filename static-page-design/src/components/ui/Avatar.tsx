import Image from "next/image";

const Avatar = ({ src }: { src: string }) => {
  return <Image alt='Image' className='rounded-full w-11 h-11 ml-2' src={src} loading="lazy" />;
};

export default Avatar;
