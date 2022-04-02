import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    author: "What is Done",
    text: "HTML, CSS, JS, REACT, REDUX, REDUX-TOOLKIT, SCSS/SASS, NEXT JS"
  },
  { id: "2", author: "Whats next", text: "TS, Redux-Query" }
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    removePost: (state, action) => {
      return state.filter((stateElem) => {
        return stateElem.id !== action.payload.id;
      });
    }
  }
});

// Action creators are generated for each case reducer function
export const { addPost, removePost } = postsSlice.actions;

export default postsSlice.reducer;
