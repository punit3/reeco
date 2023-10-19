import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchOrders = createAsyncThunk("fetchOrders", async () => {

    const res = await fetch(`http://localhost:3000/orders`);
    // console.log('api-res',res.json())
    return res?.json();
});

const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.pending, (state, action) => {
            // console.log("api-res1",action.payload)
            state.isLoading = true;
        })
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            // console.log("api-res",action.payload)
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchOrders.rejected, (state, action) => {
            // console.log("api-res3",action.payload)
            state.isError = true;
            
        })
    }
});

export default ordersSlice.reducer; 