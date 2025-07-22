import { useSelector } from "react-redux";
import { selectAll } from "../store/PostSlice/postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

 

const PostList = () => {
  const posts = useSelector(selectAll);
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map(post => (
    <article key={post.id} className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}</p>
      <p className="post-credit"> 
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </p>
    </article>
  ));

  return (
    <div className="posts-list-container">
      <h1>Posts</h1>
      {renderedPosts}
    </div>
  );
};

export default PostList;