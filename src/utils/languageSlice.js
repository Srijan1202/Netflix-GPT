import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "config",
    initialState: {
      language:"en",
    },
    reducers: {
      setLanguage: (state, action) => {
        state.language = action.payload;
      },
    },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;