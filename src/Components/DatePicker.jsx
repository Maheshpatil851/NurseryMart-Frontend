const DatePicker = ({name,selectedDate, setSelectedDate }) => {
    return (
      <div className="flex flex-col">
        <label className="mb-2 text-sm">{name}</label>
        <input
          type="date"
          value={selectedDate || ''}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
    );
  };
  
  export default DatePicker;