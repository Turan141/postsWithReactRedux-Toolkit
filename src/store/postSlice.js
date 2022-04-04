import { createSlice, combineReducers } from "@reduxjs/toolkit";

const postsInitialState = [
  {
    id: "1",
    author: "What is Done",
    text: "HTML, CSS, JS, REACT, REDUX, REDUX-TOOLKIT, SCSS/SASS, NEXT JS",
    reaction: {
      "😀": 0,
      "😸": 0,
      "🤡": 0,
      "💥": 0,
      "⚡": 0
    }
  },
  {
    id: "2",
    author: "Whats next",
    text: "TS, Redux-Query",
    reaction: {
      "😀": 0,
      "😸": 0,
      "🤡": 0,
      "💥": 0,
      "⚡": 0
    }
  }
];

export const postsSlice = createSlice({
  name: "posts",
  initialState: postsInitialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    removePost: (state, action) => {
      return state.filter((stateElem) => {
        return stateElem.id !== action.payload.id;
      });
    },
    increaseLikeCount: (state, action) => {
      const { emojiTarget, emojiType } = action.payload;

      let targetPost = state.find((post) => +post.id === +emojiTarget);
      if (targetPost) {
        targetPost.reaction[emojiType]++;
      }
    }
  }
});

// Action creators are generated for each case reducer function

export const { addPost, removePost, increaseLikeCount } = postsSlice.actions;

export default postsSlice.reducer;
