const TableRow = ({ row, columns }) => {
    return (
      <tr>
        {columns.map((col, index) => (
          <td key={index} className="px-4  py-3">
            {row[col.toLowerCase().replace(/\s+/g, '_')]}
          </td>
        ))}
      </tr>
    );
  };
  
  export default TableRow;