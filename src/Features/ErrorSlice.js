import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    alert: null, 
    showAlert: false,
  };

  const alertTypes = ['success', 'error', 'warning', 'info'];

  const ErrorSlice = createSlice({
    name : "error",
    initialState,
    reducers:{
          setAlert: (state, action) => {
            const { message, type } = action.payload;
            if (alertTypes.includes(type)) {
                state.alert = { message, type };
                state.showAlert = true;
            } else {
                state.alert = { message: 'Invalid alert type', type: 'error' };
                state.showAlert = true;
            }
        },
        closeAlert :(state)=> {
            state.showAlert = false;
            state.alert =null
        }
    },
  });
  export const { setAlert,closeAlert } = ErrorSlice.actions; 
  export default ErrorSlice.reducer; 