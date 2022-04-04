import { useSelector } from "react-redux";
import { EmojiLikes } from "./EmojiLikes";
import { useDispatch } from "react-redux";
import { removePost } from "./store/postSlice";

export const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const deletePostHandler = (e) => {
    let id = e.target.getAttribute("data-id");
    dispatch(
      removePost({
        id
      })
    );
  };

  const postsMap = posts.map((elem) => {
    return (
      <div key={elem.id} className="postsBlog">
        <button
          data-id={elem.id}
          onClick={deletePostHandler}
          className="delete"
        >
          &#10008;
        </button>
        <h2>
          <small>Author</small>: {elem.author}
        </h2>
        <h3>Text: {elem.text}</h3>
        <EmojiLikes />
      </div>
    );
  });

  return (
    <>
      <div className="posts">{postsMap}</div>
    </>
  );
};
