import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    alert: {}, 
    showAlert: false,
  };

  const alertTypes = ['success', 'error', 'warning', 'info'];

  const AlertSlice = createSlice({
    name : "alert",
    initialState,
    reducers:{
          setAlert: (state, action) => {
            const { message, type } = action.payload;
            console.log(message,type);
            if (alertTypes.includes(type)) {
                console.log(message,type);

                state.alert = { message, type };
                state.showAlert = true;
                console.log(state.showAlert);

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
  export const { setAlert,closeAlert } = AlertSlice.actions; 
  export default AlertSlice.reducer; 