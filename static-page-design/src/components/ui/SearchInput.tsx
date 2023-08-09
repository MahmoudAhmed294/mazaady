import React from "react";
import Input from "./Input";
import Button from "./Button";
import SearchIcon from "../icons/SearchIcon";

type Props = {};

const SearchInput = (props: Props) => {
  return (
    <div className='flex relative'>
      <div className='-z-0 bg-pink-100 opacity-10 rounded-sm absolute left-0 right-0 top-0 bottom-0' />
      <input
        className='p-3 relative z-20 pr-7 w-full bg-transparent searchPlaceHolder focus-visible:outline-none'
        placeholder='أبحث هنا'
      />
      <button
        className='bg-pink-100 relative z-20  text-white font-bold py-2 px-5 rounded'
        {...props}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchInput;
