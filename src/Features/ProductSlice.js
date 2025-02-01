import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import { axiosWrapper } from '../Utils/AxiosFetchWrapper';
import { setLoading } from '../Features/LoadingSlice';  
import { setAlert } from '../Features/ErrorSlice';

const initialState = {
  product: [],
  status: 'idle',  // Track the request status (loading, succeeded, failed)
  error: null,
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
      const response = await axiosWrapper.post('/api/1.0/Product', productData, true, dispatch);  // Use axiosWrapper for POST request
      console.log(response);
      return response.data;  // Return the new product data
    } catch (error) {
      dispatch(setAlert(error.message || 'Failed to fetch products',error)); 
      return rejectWithValue(error.message || 'Failed to create product');  // Handle error and reject the thunk
    }
    finally{
      dispatch(setLoading(false));
    }
  }
);

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
   

  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';  // Set loading state when the GET request is in progress
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';  // Set succeeded state when the GET request is successful
        state.products = action.payload;  // Store the fetched products
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'failed';  // Set failed state if the GET request fails
        state.error = action.payload;  // Store the error message
      })
      .addCase(createProduct.pending, (state) => {
        state.status = 'loading';  // Set loading state when the POST request is in progress
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';  // Set succeeded state when the POST request is successful
        state.product?.push(action.payload);  // Add the new product to the list
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = 'failed';  // Set failed state if the POST request fails
        state.error = action.payload;  // Store the error message
      });
  },


})

// Action creators are generated for each case reducer function
export const { create, update, remove ,get} = ProductSlice.actions

export default ProductSlice.reducer