import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createBook, fetchBooks, updateBook, deleteBook } from './Slices/index';
import booksReducer from "./Slices/index"
import thunk from 'redux-thunk';
const middleware = [...getDefaultMiddleware(), thunk];
export const store = configureStore({
  reducer: {
    // your other reducers go here
    books: booksReducer,
  },
 
});


