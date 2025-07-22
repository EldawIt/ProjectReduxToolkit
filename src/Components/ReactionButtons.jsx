import { useDispatch } from "react-redux";
import { reactionAdded } from "../store/PostSlice/postsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
                style={{color:"black"}}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div>{reactionButtons}</div>
}
export default ReactionButtons