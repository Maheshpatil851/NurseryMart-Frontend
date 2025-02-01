import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../Utils/FetchWrapper";
import { axiosWrapper } from '../Utils/AxiosFetchWrapper';

export const loginUser = createAsyncThunk(
  '/api/1.0/access/Auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetchData('/api/1.0/access/Auth/login', {
        method: 'POST',
        body: credentials, 
      });
      console.log(response);
      const newAccessToken  = response.data[0].accesstoken;
      console.log(response.data[0].accesstoken);
      console.log(newAccessToken);
      localStorage.setItem('accessToken', response.data[0].accesstoken);
      return newAccessToken;
    } catch (error) {
      return rejectWithValue(error.message || 'Login failed');
    }
  }
);

export const UserRegister = createAsyncThunk(
  'product/createProduct',  // Action type (name)
  async (data, { dispatch, rejectWithValue }) => {
    
    try {
      console.log("here in slice",data);
      const response = await axiosWrapper.post('/api/1.0/access/Auth/create-user', data, true, dispatch);  // Use axiosWrapper for POST request
      console.log(response);
      return response.data;  // Return the new product data
    } catch (error) {
      console.log("here in error",error);
      return rejectWithValue(error.message || 'Failed to create product');  // Handle error and reject the thunk
    }
  }
);

const initialState = {
  product: [],
  count: 0,
  isLoggedIn : false,
  accessToken: null,
  status: 'idle',
  error: null,
};

  export const AuthSlice  =  createSlice({
    name :"auth",
    initialState,
    reducers: {
      logout: (state) => {
        state.accessToken = null;
        state.isLoggedIn =false;
        localStorage.removeItem('accessToken'); 
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.status = 'loading'; 
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.accessToken = action.payload;
          console.log("AccessToken" ,state.accessToken)
          state.isLoggedIn = true;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload; 
        })
        .addCase(UserRegister.pending, (state) => {
          state.status = 'loading'; 
        })
        .addCase(UserRegister.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.accessToken = action.payload;
        })
        .addCase(UserRegister.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload; 
        })
    },
  });

export const { logout } = AuthSlice.actions;

export default AuthSlice.reducer;