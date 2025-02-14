import { configureStore } from "@reduxjs/toolkit";
import userReaducer from "./userSlice";
import moviesReducer from "./movieSlice";

const Appstore = configureStore({
  reducer: {
    user: userReaducer,
    movies: moviesReducer,
  },
});

export default Appstore;
