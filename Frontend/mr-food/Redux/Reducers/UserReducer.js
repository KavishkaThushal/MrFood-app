import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    error: null,
    loading: false,

}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signinStart:(state)=>{
            state.loading=true
        },
        signinSuccess:(state,action)=>{
            state.loading=false
            state.user=action.payload
        },
        signinFailed:(state,action)=>{
            state.loading=false
            state.error=action.payload
        },
        signout:(state)=>{
            state.user=null
        },
        signupStart:(state)=>{
            state.loading=true
        },
        signupSuccess:(state,action)=>{
            state.loading=false
            state.user=action.payload
        },
        signupFailed:(state,action)=>{
            state.loading=false
            state.error=action.payload
        },

    }
})

export const {signinStart,signinSuccess,signinFailed,signout,signupStart,signupSuccess,signupFailed}=userSlice.actions
export default userSlice.reducer