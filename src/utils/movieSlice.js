import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowmovies:null,
        trailer:null,
        popularmovies:null,
        topratedmovies:null,
    },
    reducers:{
        addnowmovie:(state,action)=>{
            state.nowmovies=action.payload;
        },
        addpopularmovie:(state,action)=>{
            state.popularmovies=action.payload;
        },
        addtopratedmovie:(state,action)=>{
            state.topratedmovies=action.payload;
        },
        addtrailer:(state,action)=>{
            state.trailer=action.payload;
        },
    }
})

export const {addnowmovie,addtrailer,addpopularmovie,addtopratedmovie} = movieSlice.actions;

export default movieSlice.reducer;