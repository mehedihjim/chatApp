import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loggedinUserInfo: (state, action) => {
            state.value = action.payload
        },
    },
})


export const { loggedinUserInfo } = userSlice.actions

export default userSlice.reducer