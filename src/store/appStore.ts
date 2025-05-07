import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./productSlice";
import adminReducer from "./adminSlice";

export const appStore = configureStore({
    reducer: {
        product: productReducer,
        admin: adminReducer
    },
});

export type RootState = ReturnType<typeof appStore.getState>;