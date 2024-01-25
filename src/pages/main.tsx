import { FC } from 'react'
import { useGetPostsQuery } from '../app/store/api/postsApi'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Posts } from './post/ui/posts';
import { Post } from './post';



export const Main: FC = () => {
    const { data, isLoading } = useGetPostsQuery()
    console.log(isLoading);
    
    // const navigate = useNavigate()

    // const handleViewClick = (id: number) => {
    //     navigate(`post/${id}`)
    // }
    
    return (
        <Routes>
            <Route path='/' element={<Posts data={data} isLoading={isLoading} />}/>
            <Route path='post/:id' element={<Post />}/>
        </Routes>
    )
}

