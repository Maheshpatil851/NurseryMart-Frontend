import React, { useState, useCallback, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import Title from '../Components/TableTiltle';
import DatePicker from '../Components/DatePicker';
import Filter from '../Components/Filter';
import Button from '../Components/Button';
import Table from '../Components/Table';
import TablePagination from '../Components/TablePagination';

const OrderPage = () => {
  const [state, setState] = useState({
    orders: [],
    page: 1,
    searchQuery: '',
    startDate: '',
    endDate: '',
    selectedFilter: ''
  });

  const columns = ["Order ID", "Name", "Status", "Date"]; // Dynamic column names

  const fetchOrders = useCallback(() => {
    // Simulate fetching data (this could be from an API)
    const newOrders = [
      { order_id: 1, name: 'Order 1', status: 'Completed', date: '2025-02-12' },
      { order_id: 2, name: 'Order 2', status: 'Pending', date: '2025-02-13' },
      { order_id: 3, name: 'Order 3', status: 'Completed', date: '2025-02-14' },
      { order_id: 4, name: 'Order 4', status: 'Pending', date: '2025-02-15' },
    ];
    setState(prevState => ({ ...prevState, orders: newOrders }));
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const filteredOrders = state.orders.filter(order => {
    return (
      order.name.toLowerCase().includes(state.searchQuery.toLowerCase()) &&
      (!state.selectedDate || order.date === state.selectedDate) &&
      (!state.selectedFilter || order.status === state.selectedFilter)
    );
  });

  return (
    <div className="container mx-auto p-4 pt-10">
      <Title title = "Customer Orders" />
      <SearchBar
        searchQuery={state.searchQuery}
        setSearchQuery={(value) => setState(prevState => ({ ...prevState, searchQuery: value }))}
      />
      <div className="flex justify-between mb-4">
        <DatePicker
          name = "Start Date"
          selectedDate={state.startDate}
          setSelectedDate={(value) => setState(prevState => ({ ...prevState, startDate: value }))}
        />
         <DatePicker
          name = "End Date"
          selectedDate={state.endDate}
          setSelectedDate={(value) => setState(prevState => ({ ...prevState, endDate: value }))}
        />
        <Filter
          selectedFilter={state.selectedFilter}
          setSelectedFilter={(value) => setState(prevState => ({ ...prevState, selectedFilter: value }))}
        />
        {/* <Button onClick={fetchOrders}>Fetch Orders</Button> */}
      </div>
      <Table columns={columns} data={filteredOrders} />
      <TablePagination
        currentPage={state.page}
        totalPages={Math.ceil(filteredOrders.length / 2)}
        setPage={(value) => setState(prevState => ({ ...prevState, page: value }))}
      />
    </div>
  );
};

export default OrderPage;

