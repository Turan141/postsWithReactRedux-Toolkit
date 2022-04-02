import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    author: "What is Done",
    text: "HTML, CSS, JS, REACT, REDUX, REDUX-TOOLKIT, SCSS/SASS, NEXT JS"
  },
  { author: "Whats next", text: "TS, Redux-Query" }
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
