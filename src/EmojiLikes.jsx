import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment } from "./store/postSlice";

export const EmojiLikes = () => {
  const emojis = useSelector((state) => state.posts.emojis);
  const dispatch = useDispatch();

  const incrementLikeCount = (e) => {
    console.log(e.target)
  }

const emojisMap = Object.entries(emojis).map(([key, subject], i) => (
  <li key={i}>
    <div className="emojis">
      <button onClick={incrementLikeCount} className="emojisEmoji">{key}</button>
      <div className="emojisCount">{subject}</div>
    </div>
  </li>
));

  return (
    <>

      <div className="emojisDiv">{emojisMap}</div>
    </>
  );
};
