
import { useDispatch, useSelector } from 'react-redux';
import { GetCategories, setCategory } from '../Features/CategorySlice';
import { SearchProducts } from '../Features/ProductSlice';
import { useEffect, useState } from 'react';

function CategoriesPills() {
    const dispatch = useDispatch();
    const [data,setData] = useState(
        {
            query: "",
            pagination: {
              pageNumber: 0,
              pageSize: 0,
              skipPagination: true,
              sortColumn: "",
              sortDesc: true
            },
            categoryId: 0
          }
    );

    const { categories, selectedCategory  } = useSelector(state => state.category)

    useEffect(() => {
        dispatch(GetCategories(null));
    }, [dispatch]);

    async function handleSelectCategory(category) {
        dispatch(setCategory(category))
        data.categoryId = category;
        await dispatch(SearchProducts(data));
    }

    return (
        <div className="flex justify-center overflow-x-auto space-x-4 pt-4 w-full ml-18 mr-18">
    <span
        onClick={() => handleSelectCategory(null)}
        id="unic"
        key="unic"
        className={`cursor-pointer inline-block px-6 py-2 text-sm font-medium rounded-full ${selectedCategory === '' ? 'bg-black text-white' : 'bg-zinc-100 text-black'}`}
    >
        All
    </span>
    {categories.map(category => (
        <span
            onClick={() => handleSelectCategory(category?.categoryId)}
            id={category?.categoryId}
            key={category?.categoryId}
            className={`cursor-pointer inline-block px-6 py-2 text-base font-medium md:text-sm md:px-4 rounded-full ${selectedCategory === category?.categoryId ? 'bg-black text-white' : 'bg-zinc-100 text-black'}`}
        >
            {category?.name}
        </span>
    ))}
</div>

    
    )
}

export default CategoriesPills