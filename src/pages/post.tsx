import { FC, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useTypedSelector } from "../shared/hooks/use-typed-selector"

export const Post: FC = () => {
    const { post } = useTypedSelector((store) => store.post)
    const { id } = useParams()
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    useEffect(() => {
        if (!post.id) {
            navigate(-1)
        }
    }, [post.id])
    console.log('Я Женёк разраб');
    
    console.log(post);

    return (
        <div>
            <h1>{post.userId}</h1>
            <h1>{post.id}</h1>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <button onClick={goBack}>Назад</button>
        </div>
    )
}