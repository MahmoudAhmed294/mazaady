import React from "react";
// =================================================================
import HoverIcon from "../ui/HoverIcon";
import BillHoverImage from "../../assets/images/notifications.png";
import HeartHoverImage from "../../assets/images/favorite.png";
import PriceChangeImage from "../../assets/images/price_change.png";
// =================================================================
import BillIcon from "../icons/BillIcon";
import HeartIcon from "../icons/HeartIcon";
import PriceChangeIcon from "../icons/PriceChangeIcon";

const LinkList = () => {
  return (
    <div className='flex gap-6 items-center justify-end'>
      {listIcon.map(({ icon, hover }: any, index) => (
        <HoverIcon key={index} DefaultIcon={icon} hoverImage={hover} />
      ))}
    </div>
  );
};

export default LinkList;

const listIcon: {}[] = [
    {
      icon: PriceChangeIcon,
      hover: PriceChangeImage,
    },
  {
    icon: BillIcon,
    hover: BillHoverImage,
  },
  {
    icon: HeartIcon,
    hover: HeartHoverImage,
  },
];
