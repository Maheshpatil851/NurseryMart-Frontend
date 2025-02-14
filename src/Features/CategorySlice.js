import { createSlice ,createAsyncThunk, isFulfilled } from "@reduxjs/toolkit";
import { axiosWrapper } from '../Utils/AxiosFetchWrapper';
import { setLoading } from '../Features/LoadingSlice';  
import { setAlert } from '../Features/ErrorSlice';

const initialState ={
    status : null,
    categories : [],
    selectedCategory:'',
    query : '',
}

export const GetCategories = createAsyncThunk('Category/Search' ,async(data,{dispatch , rejectWithValue} ) => {
  try {
     dispatch(setLoading(true));
     if(data == null){
        data = {
                "pageNumber": 0,
                "pageSize": 0,
                "skipPagination": true,
                "sortColumn": "",
                "sortDesc": true
              };
     }
     const response = await axiosWrapper.post('/api/1.0/Cateory/get' ,data,dispatch);
     console.log("api response",response);
     return response.data;
  } catch (error) {
    dispatch(setAlert(error.message || 'Failed to fetch products',error)); 
    return rejectWithValue(error.message || 'Failed to create product'); 
  }
  finally{
    dispatch(setLoading(false));
  }
})

export const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
          },
        setQuery : (state, action) => {
            state.query = action.payload
          },
        // setPriceOrder: (state, action) => {
        //     state.priceOrder = action.payload;
        //   },
        // setRatingOrder: (state, action) => {
        //     state.ratingOrder = action.payload;
        //   },
    },
    extraReducers: (builder) => {
        builder
        .addCase(GetCategories.fulfilled ,(state,action) => {
            state.categories = action.payload;
            state.status = "success";
        })
    }
});

export const { setCategory,setQuery } = CategorySlice.actions

export default CategorySlice.reducer