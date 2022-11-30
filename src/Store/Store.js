import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from '../resources/features/AuthSlice'
import { MhealthApi } from '../resources/MhealthApi'


export const Store = configureStore({
    reducer:{
        [MhealthApi.reducerPath]:MhealthApi.reducer,
        auth:AuthSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(MhealthApi.middleware)
})