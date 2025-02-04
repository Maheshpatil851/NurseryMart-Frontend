import { FiSearch } from "react-icons/fi";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../Features/ProductSlice";
import {SearchProducts} from '../Features/ProductSlice'

function SearchBar() {
  const dispatch = useDispatch();

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

 async function handleSearch(e){
    //  await dispatch(setQuery(e.target.value));
     formdata.query = e.target.value
    await dispatch(SearchProducts(formdata));
  }

  return (
    <div className="flex justify-center items-center  py-4 px-4">
      <div className="relative w-4xl  max-w-lg">
        <input
          onChange={handleSearch}
          type="text"
          className="border-2 border-black rounded-full px-4 py-2 sm:px-6 sm:py-3 w-full text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Search..."
        />
        <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl" />
      </div>
    </div>
  );
}

export default SearchBar;
