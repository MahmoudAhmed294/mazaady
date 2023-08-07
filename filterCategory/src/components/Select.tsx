/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Loader from "./Loader";
import ArrowDown from "./ArrowDown";
import Input from "./Input";
import useAxios from "@/api/useAxios";

interface Option {
  id: number;
  name: string;
  children?: any[];
}

interface SearchableSelectProps {
  options: Option[];
  isLoading?: boolean;
  onChange: (event: any) => void;
  label: string;
  other?: boolean;
  value: Object;
  name: string;
  setChild?: (children: any) => void;
  target?: "children" | "id" | undefined;
  hasOptionsChild?: boolean;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  onChange,
  isLoading,
  label,
  other,
  name,
  value,
  setChild,
  target,
  hasOptionsChild,
}) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const { data, error, loading, mutate } = useAxios();

  useEffect(() => {
    if (other) {
      options.push({ name: "other", id: Math.random() });
    }
  }, [options, other]);

  const filteredOptions = options?.filter((option) =>
    option.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleOptionClick = (option: Option) => {
    if (setChild && target) {
      setChild(option[target]);
    }
    onChange({ ...value, [name]: option.name });
    setSearch(option.name);
    setIsOpen(false);
    setSelectedOption(option);
  };

  useEffect(() => {
    if (hasOptionsChild && selectedOption) {
      mutate(`get-options-child/${selectedOption?.id}`);
    }
  }, [options, hasOptionsChild, selectedOption]);

  return (
    <>
      {isOpen && (
        <div
          className='absolute top-0 left-0 right-0 bottom-0 z-10 '
          onClick={() => setIsOpen(false)}
        />
      )}
      <div className='relative'>
        <div className='relative z-10 mt-8'>
          <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor='searchable-select'>
            {label}
          </label>

          <input
            id='searchable-select'
            disabled={isLoading}
            type='text'
            value={search}
            autoComplete='off'
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onClick={() => setIsOpen(true)}
            className='shadow appearance-none
           border rounded
            w-full py-2 px-3
             text-gray-700 leading-tight focus:outline-none focus:shadow-outline relative z-0'
          />
          {isLoading ? <Loader /> : <ArrowDown />}
        </div>
        {isOpen && (
          <ul className='absolute z-50 w-full bg-white border border-gray-200 rounded mt-2 text-gray-700 max-h-64 overflow-y-auto'>
            {filteredOptions?.map((option) => (
              <li
                key={option.id}
                onClick={() => handleOptionClick(option)}
                className='cursor-pointer p-2 hover:bg-gray-200'>
                {option.name}
              </li>
            ))}
          </ul>
        )}
        {selectedOption?.name === "other" && (
          <Input placeholder='Other' name={name} onChange={onChange} value={value} />
        )}
      </div>
      {hasOptionsChild && data
        ? data.map((option: any) => (
            <SearchableSelect
              key={option.id}
              label={option.slug}
              name={option.slug}
              onChange={onChange}
              isLoading={loading}
              options={option.options}
              value={value}
              other
            />
          ))
        : null}
    </>
  );
};

export default SearchableSelect;
