import { configureStore } from "@reduxjs/toolkit";
import userReaducer from "./userSlice";

const Appstore= configureStore({
    reducer: {
        user: userReaducer,
    }
});

export default Appstore;    