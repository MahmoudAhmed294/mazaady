import React from 'react'
import LinkButton from '../ui/LinkButton';


const LinkList = () => {
  return (
    <div className='flex gap-14 items-center'>
      {["الرئيسية", "التصنيفات", "مشترياتي", "حسابي"].map((value) => (
        <LinkButton href='#' key={value}>
          {value}
        </LinkButton>
      ))}
    </div>
  );
}

export default LinkList