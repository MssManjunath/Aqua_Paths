import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState = {userData:{}}

const UserSlice = createSlice({
    name: "users",
    initialState: {
        loading: 'idle',
        userData: {}
    },
    reducers: {
        usersLoading(state, action:PayloadAction<{}>) {
            if(state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        usersReceived(state, action) {
            if(state.loading === 'pending') {
                state.loading = 'idle'
                state.userData = action.payload
            }
        }
    }
})

export const { usersLoading, usersReceived } = UserSlice.actions
export default UserSlice.reducer