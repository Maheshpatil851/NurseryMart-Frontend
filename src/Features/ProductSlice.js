import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import { axiosWrapper } from '../Utils/AxiosFetchWrapper';
import { setLoading } from '../Features/LoadingSlice';  
import { setAlert } from '../Features/ErrorSlice';

const initialState = {
  products: [],
  product : {},
  status: 'idle',  
  error: null,
  query:''
}

export const getProducts = createAsyncThunk(
  'product/getProducts',  // Action type (name)
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosWrapper.get('/api/1.0/Product', null, true, dispatch);  // Use axiosWrapper for GET request
      return response.data;  // Return the data to be used in the reducer
    } catch (error) {
      dispatch(setAlert(error.message || 'Failed to fetch products',error)); 
      return rejectWithValue(error.message || 'Failed to fetch products');  // Handle error and reject the thunk
    }
    finally{
      dispatch(setLoading(false));
    }
  }
);


export const createProduct = createAsyncThunk(
  'product/createProduct',  // Action type (name)
  async (productData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosWrapper.post('/api/1.0/Product', productData, true, dispatch);  
      return response.data;  
    } catch (error) {
      dispatch(setAlert(error.message || 'Failed to fetch products',error)); 
      return rejectWithValue(error.message || 'Failed to create product');  
    }
    finally{
      dispatch(setLoading(false));
    }
  }
);

export const SearchProducts = createAsyncThunk('Product/Search' ,async(data,{dispatch , rejectWithValue} ) => {
  try {
     dispatch(setLoading(true));
     if(data == null){
              data ={
                query: initialState.query,
                pagination: {
                  pageNumber: 0,
                  pageSize: 0,
                  skipPagination: true,
                  sortColumn: "",
                  sortDesc: true
                },
                categoryId: 0
              };
     };
     const response = await axiosWrapper.post('/api/1.0/Product/search' ,data,dispatch);
     return response.data;
  } catch (error) {
    dispatch(setAlert(error.message || 'Failed to fetch products',error)); 
    return rejectWithValue(error.message || 'Failed to create product'); 
  }
  finally{
    dispatch(setLoading(false));
  }
})

export const GetCategories = createAsyncThunk('Category/Search' ,async(data,{dispatch , rejectWithValue} ) => {
  try {
     dispatch(setLoading(true));
     const response = await axiosWrapper.post('/api/1.0/Product' ,data,dispatch);
     return response.data;
  } catch (error) {
    dispatch(setAlert(error.message || 'Failed to fetch products',error)); 
    return rejectWithValue(error.message || 'Failed to create product'); 
  }
  finally{
    dispatch(setLoading(false));
  }
})

export const GetProductById = createAsyncThunk('Product/GetById' ,async(id,{dispatch , rejectWithValue} ) => {
  try {
     dispatch(setLoading(true));
     const response = await axiosWrapper.get(`/api/1.0/Product/get-by/${id}`,dispatch);
     return response.data;
  } catch (error) {
    dispatch(setAlert(error.message || 'Failed to fetch products',error)); 
    return rejectWithValue(error.message || 'Failed to create product'); 
  }
  finally{
    dispatch(setLoading(false));
  }
})


export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setQuery : (state, action) => {
      return { ...state, query: action.payload }; 
    },
   

  },
  extraReducers: (builder) => {
    builder
      
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';  
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';  
      })
      .addCase(SearchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';  
        state.products = action.payload;  
      })
      .addCase(GetProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';  
        state.product = action.payload[0];  
      })
  },


})

// Action creators are generated for each case reducer function
export const { setQuery} = ProductSlice.actions

export default ProductSlice.reducer