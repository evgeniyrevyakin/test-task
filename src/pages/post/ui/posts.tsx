import {FC} from 'react'
import { useNavigate } from 'react-router-dom';
import { Props } from './types';
import { useDispatch } from 'react-redux';
import { setPost } from '../model';
import { Post } from '../../../shared';


export const Posts: FC<Props> = ({data, isLoading}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleViewClick = (post: Post) => {
        navigate(`post/${post.id}`)
        dispatch(setPost(post))
    }
    
    return (
        <div>
            <ul>
                {data?.map((post) => (
                    <div key={post.id}>
                        <li>{post.title}</li>
                        <li>{post.body}</li>
                        <button onClick={() => handleViewClick(post)}>Просмотр</button>
                    </div>
                ))}
            </ul>
        {isLoading && <p>Loading...</p>}
        </div>
    )
}