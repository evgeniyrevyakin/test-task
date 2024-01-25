import { FC, useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import { Posts } from '../../posts/ui/posts';
import { PostInfoPage } from '../../post-info-page';
import { useGetPostsQuery } from '../../../shared/api/postsApi'



export const Main: FC = () => {
    const limitPosts: number = 5;
    const [postStart, setPostStart] = useState(0);

    const { data = [], isLoading } = useGetPostsQuery({
        limit: limitPosts,
        start: postStart,
      })
 
    return (
        <Routes>
            <Route 
                path='/' 
                element={
                    <Posts 
                        data={data} 
                        isLoading={isLoading} 
                        setPostStart={setPostStart} 
                    />
                }
            />
            <Route path='post/:id' element={<PostInfoPage />}/>
        </Routes>
    )
}

