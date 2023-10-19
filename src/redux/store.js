import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slice/OrdersSlice'

export const store = configureStore({
    reducer: {
        orders:ordersReducer
    }
});