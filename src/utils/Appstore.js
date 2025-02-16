import { configureStore } from "@reduxjs/toolkit";
import userReaducer from "./userSlice";
import moviesReducer from "./movieSlice";
import togglereducer from "./toggleSlice";

const Appstore = configureStore({
  reducer: {
    user: userReaducer,
    movies: moviesReducer,
    toggle: togglereducer,
  },
});

export default Appstore;
