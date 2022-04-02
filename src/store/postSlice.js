import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { author: "Turan", text: "Hello my name is Turan" },
  { author: "Fatis", text: "Hello my name is Fatis" }
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    removePost: (state, action) => {}
  }
});

// Action creators are generated for each case reducer function
export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
