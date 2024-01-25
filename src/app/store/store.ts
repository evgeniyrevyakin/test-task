import { configureStore } from '@reduxjs/toolkit'

import { postsApi } from '../../shared/api/postsApi'
import { postReducer } from '../../pages/posts'

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        post: postReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(postsApi.middleware),
})