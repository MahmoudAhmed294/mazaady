import React, { useState } from "react";
import Table from "@/components/table";
import FilterForm from "@/components/Form";

const Page = () => {
  const [selectedFilter, setSelectedFilter] = useState({});
  const [showTable, setShowTable] = useState<boolean>(false);

  return (
    <div className='w-full  mt-12'>
      <div className='align-middle flex justify-center bg-gray-100 py-6 px-3'>
        {showTable ? (
          <Table
            data={[selectedFilter]}
            setSelectedFilter={setSelectedFilter}
            setShowTable={setShowTable}
          />
        ) : (
          <FilterForm
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            setShowTable={setShowTable}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
