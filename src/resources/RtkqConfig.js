import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
    baseUrl:"http://127.0.0.1:8000/api",
     prepareHeaders:(headers, { getState }) => {
    const token = getState().auth.token
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    headers.set("Accept", "application/json");
    return headers
  
    }
})

export {createApi,baseQuery};
