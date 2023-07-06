import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    userDetails: {
      userName: "",
      userId: "",
      mailId: "",
    },
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setUserData: (state, action) => {
      state.userDetails = {
        userName: "Vasanth Kumar",
        userId: "123",
        mailId: "vasanth@gmail.com",
      };
    },
    clearUserData: (state, action) => {
      state.userDetails = {
        userName: "",
        userId: "",
        mailId: "",
      };
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  clearUserData,
  setUserData,
} = counterSlice.actions;

export default counterSlice.reducer;
