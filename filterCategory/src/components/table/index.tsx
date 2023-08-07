import React from "react";
import Columns from "./Columns";
import Rows from "./Rows";
import Button from "../Button";

interface ITableProps {
  data?: Record<string, any>[];
  setShowTable: (value: any) => void;
  setSelectedFilter: (value: object) => void;
}

const Table: React.FC<ITableProps> = ({ data, setShowTable, setSelectedFilter }) => {
  
  if (!data || data.length === 0) {
    return null;
  }

  const columns = Object.keys(data[0]);

  const closeTable = (
    setShowTable: (value: boolean) => void,
    setSelectedFilter: (value: object) => void,
  ) => {
    setSelectedFilter({});
    setShowTable(false);
  };

  return (
    <div>
      <Button title='Close' onClick={() => closeTable(setShowTable, setSelectedFilter)} />
      <table className='w-full mt-8 divide-y divide-gray-200 overflow-x-auto'>
        <Columns columns={columns} />
        <Rows rows={data} columns={columns} />
      </table>
    </div>
  );
};

export default Table;
