import React from "react";

interface IRowsProps {
  rows: Record<string, any>[];
  columns: string[];
}

const Rows: React.FC<IRowsProps> = ({ rows, columns }) => (
  <tbody className='bg-white divide-y divide-gray-200'>
    {rows.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {columns.map((column, columnIndex) => (
          <td key={columnIndex} className='px-6 py-4 whitespace-nowrap'>
            {row[column]}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);
export default Rows;
