import { createSlice,createAsyncThunk ,isFulfilled} from "@reduxjs/toolkit";
import { axiosWrapper } from '../Utils/AxiosFetchWrapper';
import { setLoading } from '../Features/LoadingSlice';  
import { setAlert } from '../Features/AlertSlice';

export const CreateOrder = createAsyncThunk('createOrder' , async(data,{dispatch,rejectWithValue}) => {
    try {
        dispatch(setLoading(true));
        const response = await axiosWrapper.post('/api/1.0/Order' ,data,dispatch);
        console.log("api response",response);
        return response.data;
     } catch (error) {
       dispatch(setAlert({message:error.message || 'Failed to fetch products',type:'error'})); 
       return rejectWithValue(error.message || 'Failed to create product'); 
     }
     finally{
       dispatch(setLoading(false));
       dispatch(setAlert({message:'Order Placed Successfully',type:'success'})); 

     }
})


const initialState ={
    status : null,
    Orders : [],
    MyOrders:[],
    query : '',
}

export const OrderSlice = createSlice({
    name : "order",
    initialState,
    reducers : {

    },
    
})


export default OrderSlice.reducer