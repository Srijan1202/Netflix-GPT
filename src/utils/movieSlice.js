import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

movieSlice = createSlice({
    name:"movies",
    initialState:{
        movies:[],
    },
    reducers:{
        addnowmovie:(state,action)=>{
            state.movies.push(action.payload);
        },
        
    }
})

export const {addnowmovie} = movieSlice.actions;

export const movieSlice.reducer;