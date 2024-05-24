import { createSlice } from "@reduxjs/toolkit";
import Login from "../componants/Login";

const initialState = {
  UserData: {},
  isRegister: false,
  isLogin: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.UserData = action.payload;
      state.isLogin = true;
    },
    register: (state, action) => {
      state.UserData = action.payload;
      state.isRegister = true;
    },
    logout: (state) => {
      state.isLogin = false;
      state.UserData = {};
    },
  },
});

export const { login, register, logout } = UserSlice.actions;
export default UserSlice.reducer;
