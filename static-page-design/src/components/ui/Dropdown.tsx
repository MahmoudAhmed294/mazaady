import { useState } from "react";

type DropdownProps = {
  label: string;
  options: { label: string; value: string | number }[];
  icon: React.ReactNode;
};

const Dropdown = ({ label, options, icon }: DropdownProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropdownClick = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleOptionClick = (option: { label: string; value: string | number }) => {
    console.log(`Selected option: ${option.label}`);
    setOpenDropdown(false);
  };

  return (
    <>
      {openDropdown && (
        <div
          onClick={() => setOpenDropdown(false)}
          className='absolute left-0 right-0 top-0 bottom-0'
        />
      )}
      <div className='relative p-3'>
        <div className='-z-0 bg-pink-100 rounded-sm opacity-10 absolute left-0 right-0 top-0 bottom-0' />
        <button
          onClick={handleDropdownClick}
          className={`bg-transparent ${
            !openDropdown ? "text-pink-100" : "text-orange-800"
          } flex items-center gap-1 relative z-10 font-medium`}>
          {label}
          {icon}
        </button>
        {openDropdown && (
          <div className='duration-200 absolute left-0 z-50 mt-2 w-full rounded-sm bg-pink-300 font-medium dropDown-shadow'>
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className='cursor-pointer text-sm py-2 px-4 text-black-200'>
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
