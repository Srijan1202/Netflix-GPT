import { configureStore } from "@reduxjs/toolkit";
import userReaducer from "./userSlice";
import moviesReducer from "./movieSlice";
import toggleReducer from "./toggleSlice";
import languageReducer from "./languageSlice";

const Appstore = configureStore({
  reducer: {
    user: userReaducer,
    movies: moviesReducer,
    toggle: toggleReducer,
    language: languageReducer,
  },
});

export default Appstore;
