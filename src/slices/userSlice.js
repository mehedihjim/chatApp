import { createSlice } from '@reduxjs/toolkit'
import user1 from "../assets/profile-pic/rafsan.png";


const initialState = {
    value: {
        name: "Unknown",
        title: "Hi...",
        img: user1
    },
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userLoginInfo: (state) => {
            state.value;
        },
    },
})


export const { userLoginInfo } = userSlice.actions

export default userSlice.reducer