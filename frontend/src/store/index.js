import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import booksReducer from "./Slices/index";
export const store = configureStore({
  reducer: {
    // your other reducers go here
    books: booksReducer,
  },
});
