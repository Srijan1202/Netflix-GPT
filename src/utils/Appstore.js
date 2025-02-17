import { configureStore } from "@reduxjs/toolkit";
import userReaducer from "./userSlice";
import moviesReducer from "./movieSlice";
import toggleReducer from "./toggleSlice";

const Appstore = configureStore({
  reducer: {
    user: userReaducer,
    movies: moviesReducer,
    toggle: toggleReducer,
  },
});

export default Appstore;
