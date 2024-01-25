import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from './api/postsApi'
import { postReducer } from '../../pages/post/model/slice'

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        post: postReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware)
})