import { useSelector } from "react-redux";
import { EmojiLikes } from "./EmojiLikes";
import { useDispatch } from "react-redux";
import { deletePost } from "./store/postSlice";

export const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const deletePost = (e) => {
    console.log(e);
  };

  const postsMap = posts.map((elem) => {
    return (
      <div key={elem.id} className="postsBlog">
        <button onClick={deletePost} className="delete">
          &#10008;
        </button>
        <h2>
          <small>Author</small>: {elem.author}
        </h2>
        <h3>Text: {elem.text}</h3>
        <EmojiLikes />
        <button onClick={() => console.log(posts)}></button>
      </div>
    );
  });

  return (
    <>
      <div className="posts">{postsMap}</div>
    </>
  );
};
