import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import cartReducer from "./CartSlice";

const MainStore = configureStore({
  reducer: {
    user: UserReducer,
    cart: cartReducer,
  },
});

export default MainStore;
