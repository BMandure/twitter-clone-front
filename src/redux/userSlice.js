import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setToken(state, action) {
      return { token: action.payload.token };
    },
    deleteToken(state, action) {
      return { token: null };
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken, deleteToken } = actions;
export default reducer;
