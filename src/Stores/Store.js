import { configureStore } from '@reduxjs/toolkit'
import ProductSliceReducer from '../Features/ProductSlice'; 
import CartSliceReducer from '../Features/CartSlice';       
import AuthSliceReducer from '../Features/AuthSlice';
import LoadingReducer from '../Features/LoadingSlice'; 
import Categoryreducer from '../Features/CategorySlice';       
import AlertReducer from '../Features/AlertSlice'; 
import OrderReducer from '../Features/OrderSlice'; 

export const store = configureStore({
  reducer: {
    product: ProductSliceReducer, 
    cart: CartSliceReducer,       
    auth: AuthSliceReducer, 
    loading: LoadingReducer,
    category : Categoryreducer,
    alert : AlertReducer, 
    order :  OrderReducer,
  },
})