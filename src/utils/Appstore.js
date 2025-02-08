import { configureStore } from "@reduxjs/toolkit";
import userReaducer from "./userSlice";
import movieSlicereducer from "./movieSlice";

const Appstore= configureStore({
    reducer: {
        user: userReaducer,
        movies: movieSlicereducer,
    },
});

export default Appstore;    