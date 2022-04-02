import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../store/postSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer
  }
});
