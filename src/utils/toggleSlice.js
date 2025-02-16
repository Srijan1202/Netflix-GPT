import { createSlice } from "@reduxjs/toolkit"

const toggleSlice=createSlice({
    name:"toggle",
    initialState:{
        toggle:false
    },
    reducers:{
        toggleHandler:(state)=>{
            state.toggle=!state.toggle
        }
    }
})
export const { toggleHandler}=toggleSlice.actions

export default toggleSlice.reducer