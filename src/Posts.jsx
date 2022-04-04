import { useSelector, useDispatch } from "react-redux";
import { EmojiLikes } from "./EmojiLikes";
import { removePost, increaseLikeCount } from "./store/postSlice";

export const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const deletePostHandler = (e) => {
    let id = e.target.getAttribute("data-id");
    dispatch(
      removePost({
        id
      })
    );
  };

  const increaseLikeCountHandler = (id, type) => {
    let emojiTarget = id;
    let emojiType = type;
    dispatch(
      increaseLikeCount({
        emojiTarget,
        emojiType
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

        <div className="emojisDiv">
          <EmojiLikes
            data={elem}
            increaseLikeCountHandler={increaseLikeCountHandler}
            id={elem.id}
          />
        </div>
      </div>
    );
  });

  return (
    <>
      <div>{postsMap}</div>
    </>
  );
};
