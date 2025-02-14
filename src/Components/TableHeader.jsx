const TableHeader = ({ columns }) => {
    return (
      <thead>
        <tr className="bg-gray-600">
          {columns.map((col, index) => (
            <th key={index} className="px-4 py-3 text-left">
              {col}
            </th>
          ))}
        </tr>
      </thead>
    );
  };
  
  export default TableHeader;