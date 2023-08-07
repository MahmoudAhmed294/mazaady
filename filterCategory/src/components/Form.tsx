/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import SearchableSelect from "./Select";
import useAxios from "@/api/useAxios";
import Button from "./Button";

type Props = {
  setSelectedFilter: (value: any) => void;
  selectedFilter: any;
  setShowTable:(value:any)=>void;
};

const FilterForm = ({ selectedFilter, setSelectedFilter, setShowTable }: Props) => {
  // ===============================================================================
  const { data, error, loading, mutate } = useAxios();

  const {
    data: dataToCategoryProperties,
    error: errorToCategoryProperties,
    loading: IsLoadingToCategoryProperties,
    mutate: mutateToCategoryProperties,
  } = useAxios();
  // ===============================================================================

  const [subCategory, setSubCategory] = useState<any[] | null>(null);
  const [categoryPropertiesId, setCategoryPropertiesId] = useState<number | null>(null);

  // ===============================================================================

  useEffect(() => {
    mutate("get_all_cats");
  }, []);

  useEffect(() => {
    if (error || errorToCategoryProperties) {
      alert(error || errorToCategoryProperties);
    }
  }, [error, errorToCategoryProperties]);

  useEffect(() => {
    if (categoryPropertiesId) {
      mutateToCategoryProperties(`properties?cat=${categoryPropertiesId}`);
    }
  }, [categoryPropertiesId]);
  // ===============================================================================

  return (
    <div className='container w-1/3'>
      <SearchableSelect
        label='Main Category'
        onChange={setSelectedFilter}
        options={data?.categories ?? []}
        isLoading={loading}
        value={selectedFilter}
        name=' mainCategory'
        setChild={setSubCategory}
        target='children'
      />
      <SearchableSelect
        label='Sub Category'
        onChange={setSelectedFilter}
        options={subCategory ?? []}
        isLoading={loading}
        name='subcategory'
        value={selectedFilter}
        setChild={setCategoryPropertiesId}
        target='id'
        other
      />
      {dataToCategoryProperties?.map((value: any) => {
        if (!value.options.length) return;
        return (
          <SearchableSelect
            key={value.id}
            label={value.slug}
            onChange={setSelectedFilter}
            options={value.options ?? []}
            isLoading={IsLoadingToCategoryProperties}
            name={value.slug}
            value={selectedFilter}
            hasOptionsChild
            other
          />
        );
      })}
      <div className='flex flex-1 justify-center align-middle mt-8'>
        <Button
          disabled={!selectedFilter?.mainCategory && !selectedFilter?.subcategory}
          title='Show Table'
          onClick={() => setShowTable((value: boolean) => !value)}
        />
      </div>
    </div>
  );
};

export default FilterForm;
