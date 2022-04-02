import { useSelector } from "react-redux";
import { EmojiLikes } from "./EmojiLikes";

export const Posts = () => {
  const posts = useSelector((state) => state.posts);

  const postsMap = posts.map((elem) => {
    return (
      <div className="postsBlog">
        <h2>
          <small>Author</small>: {elem.author}
        </h2>
        <h3>Text: {elem.text}</h3>
        <EmojiLikes />
      </div>
    );
  });

  return <>{postsMap}</>;
};
