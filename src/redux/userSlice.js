import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setToken(state, action) {
      return { token: action.payload.token };
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken } = actions;
export default reducer;
