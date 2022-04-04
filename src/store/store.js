import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../store/postSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice
  }
});
