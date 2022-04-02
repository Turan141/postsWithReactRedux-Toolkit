import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

export const Posts = () => {
  const posts = useSelector((state) => state.posts);

  const postsMap = posts.map((elem) => {
    return (
      <div className="postsBlog">
        <h2>
          <small>Author</small>: {elem.author}
        </h2>
        <h3>Text: {elem.post}</h3>
      </div>
    );
  });

  return <>{postsMap}</>;
};
