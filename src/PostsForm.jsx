import React from "react";
import { useDispatch } from "react-redux";
import { addPosts } from "./store/postSlice";

export const PostForm = () => {
  const dispatch = useDispatch();

  return (
    <form>
      <label>
        Author:
        <input id="author" />
      </label>
      <label>
        Post Content:
        <input id="post" />
      </label>
      <button>Add Post</button>
    </form>
  );
};
