import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = counterSlice.actions;
export default counterSlice.reducer;
