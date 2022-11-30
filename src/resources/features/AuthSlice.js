import { createSlice } from "@reduxjs/toolkit";

let userToken=JSON.parse(sessionStorage.getItem('access_token'))
let userInfo=JSON.parse(sessionStorage.getItem('user'))
const initialState={
    user:(userInfo!==null)?userInfo:null,
    token:(userToken!==null)?userToken:null
}
const AuthSlice = createSlice({
    name:"authData",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            sessionStorage.setItem("user",JSON.stringify(action.payload.user))
            sessionStorage.setItem("access_token",JSON.stringify(action.payload.access_token))
            state.user= action.payload.user
            state.token=action.payload.access_token
            return state
        },
        logout:(state)=>{
            state.user=null
            state.token=null
            sessionStorage.clear()
            return state
        }

    }
})

export const {setUser,logout}=AuthSlice.actions
export default AuthSlice.reducer