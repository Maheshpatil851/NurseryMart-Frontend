import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = ({ columns, data }) => {
  return (
    <table className="table-auto w-full mb-4 border-collapse  border-gray-600 border-2">
      <TableHeader columns={columns} />
      <tbody>
        {data.map((row, index) => (
          <TableRow key={index} row={row} columns={columns} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;