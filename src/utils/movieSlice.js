import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowmovies:null,
    },
    reducers:{
        addnowmovie:(state,action)=>{
            state.nowmovies=action.payload;
        },
        
    }
})

export const {addnowmovie} = movieSlice.actions;

export default movieSlice.reducer;