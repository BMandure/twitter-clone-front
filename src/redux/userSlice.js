import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setToken(state, action) {
      return { ...state, token: action.payload };
    },
    deleteToken(state, action) {
      return { token: null, userData: null };
    },
    setUserData(state, action) {
      return { ...state, userData: action.payload };
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken, deleteToken, setUserData } = actions;
export default reducer;
