import { FiSearch } from "react-icons/fi";
import { useRef } from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../Features/ProductSlice";
import {SearchProducts} from '../Features/ProductSlice'

function SearchBar() {
  const dispatch = useDispatch();
  const debounceTimeout = useRef(null);

  const [formdata ,setFormData] = useState(
    {
        query: '',
        pagination: {
          pageNumber: 0,
          pageSize: 0,
          skipPagination: true,
          sortColumn: "",
          sortDesc: true
        },
        categoryId: 0
      }
  )


  const handleSearch = async (e) => {
    const value = e.target.value;
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(async () => {
      formdata.query = value;
      await dispatch(SearchProducts(formdata)); 
    }, 500); 
  };
  

  return (
    <div className="flex justify-center items-center  py-4 px-4">
      <div className="relative w-6xl  max-w-lg">
      <input
          onChange={handleSearch}
          type="text"
          className="border-2 border-green-200 rounded-full px-6 py-3 w-full text-black focus:outline-none focus:ring-2 focus:ring-green-400 hover:border-green-600 transition-all duration-300 ease-in-out"
          placeholder="Search for plants, products, etc..."
        />

        {/* After Search Bar: Search Icon */}
        <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl" />
        
        {/* Hover effect: Apply a subtle shadow effect when hovered */}
        {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-30 hover:opacity-50 transition duration-300 ease-in-out"></div> */}
      </div>
    </div>
  );
}

export default SearchBar;
