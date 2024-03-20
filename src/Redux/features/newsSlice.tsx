import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const NewsSlice = createSlice({
    name: "news",
    initialState: {
        loading: 'idle',
        newsData: [],
    },
    reducers: {
        newsLoading(state) {
            if(state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        newsReceived(state, action:PayloadAction<any>) {
            console.log(action.payload)
            if(state.loading === 'pending') {
                state.loading = 'idle'
                state.newsData = action.payload?.articles
            }
        },
    }
})

export const { newsLoading, newsReceived } = NewsSlice.actions
export default NewsSlice.reducer