import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./store/postSlice";

export const PostForm = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const inputHandlerAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const inputHandlerText = (e) => {
    setText(e.target.value);
  };

  const addPostHandler = (e) => {
    e.preventDefault();
    if (author && text) {
      dispatch(
        addPost({
          id: nanoid(),
          author,
          text
        })
      );
      setAuthor("");
      setText("");
    }
  };

  return (
    <form>
      <label>
        Author:
        <input
          autoComplete="off"
          onChange={inputHandlerAuthor}
          value={author}
          id="author"
          required
        />
      </label>
      <label>
        Post Content:
        <input
          autoComplete="off"
          onChange={inputHandlerText}
          value={text}
          id="post"
          required
        />
      </label>
      <button onClick={addPostHandler}>Add Post</button>
    </form>
  );
};
