import React from "react";

interface IColumnsProps {
  columns: string[];
}

const Columns: React.FC<IColumnsProps> = ({ columns }) => (
  <thead className='bg-gray-50'>
    <tr>
      {columns.map((column, index) => (
        <th
          key={index}
          scope='col'
          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
          {column}
        </th>
      ))}
    </tr>
  </thead>
);

export default Columns;
