import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' 
import { Post } from '../../../shared/types'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        getPosts: build.query<Post[], void>({
            query: () => ({
                url: `posts`,
                method: 'GET'
            }),
        })
    })
})

export const {useGetPostsQuery} = postsApi