const Filter = ({ selectedFilter, setSelectedFilter }) => {
    return (
      <div className="flex flex-col">
        <label className="mb-2 text-sm">Filter by Status</label>
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
    );
  };
  
  export default Filter;