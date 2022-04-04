import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../store/postSlice";
import emojisReducer from "../store/postSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    emojis: emojisReducer,
  }
});
