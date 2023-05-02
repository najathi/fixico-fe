import { createSlice } from "@reduxjs/toolkit";

const reducerName = "counter";

export const initialState = {
    countNumber: 0,
};

export const counterSlice = createSlice({
    name: reducerName,
    initialState,
    reducers: {
        increment: (state: any) => {
            state.countNumber += 1;
        },
        decrement: (state: any) => {
            state.countNumber -= 1;
        },
        reset: (state: any) => {
            state.countNumber = 0;
        },
    },
});

export const { increment, decrement, reset } = counterSlice.actions;
export const counterSliceReducer = { [reducerName]: counterSlice.reducer };