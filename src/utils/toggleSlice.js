import { createSlice } from "@reduxjs/toolkit"

const toggleSlice=createSlice({
    name:"toggle",
    initialState:{
        toggle:false,
        movieResults:null,
        movieNames:null
    },
    reducers:{
        toggleHandler:(state)=>{
            state.toggle=!state.toggle
        },
        addGptMovies:(state,action)=>{
           const  {movieNames,moviesRes}=action.payload
           state.movieResults=moviesRes;
           state.movieNames=movieNames;
    }
    }
})
export const { toggleHandler,addGptMovies}=toggleSlice.actions

export default toggleSlice.reducer