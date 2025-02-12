import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowmovies:null,
        trailer:null,
    },
    reducers:{
        addnowmovie:(state,action)=>{
            state.nowmovies=action.payload;
        },
        addtrailer:(state,action)=>{
            state.trailer=action.payload;
        },
    }
})

export const {addnowmovie,addtrailer} = movieSlice.actions;

export default movieSlice.reducer;