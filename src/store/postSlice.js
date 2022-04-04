import { createSlice, combineReducers  } from "@reduxjs/toolkit";

const postsInitialState = [
  {
    id: "1",
    author: "What is Done",
    text: "HTML, CSS, JS, REACT, REDUX, REDUX-TOOLKIT, SCSS/SASS, NEXT JS"
  },
  { id: "2", author: "Whats next", text: "TS, Redux-Query" }
];

const emojisInitialState = {
  '😀': 0,
  '😸': 0,
  "🤡": 0,
  "💥":0,
  "⚡":0, 
}

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
    }
  }
});

export const emojisSlice = createSlice({
  name: "emojis",
  initialState: emojisInitialState,
  reducers: {
    increment: (state) => state + 1
  }
});

// Action creators are generated for each case reducer function
export const { addPost, removePost } = postsSlice.actions;
export const { increment } = emojisSlice.actions;


const reducer = combineReducers({
  posts: postsSlice.reducer,
  emojis: emojisSlice.reducer,
})

export default reducer

