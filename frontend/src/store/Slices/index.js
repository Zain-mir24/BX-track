import { createSlice, createAsyncThunk ,createSelector} from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/Books';

// Define initial state
const booksInitialState = {
  books: [],
  status: 'idle',
  error: null,
};
export const selectBooksState = state => state.books.status;
// Define thunk for creating a book
export const createBook = createAsyncThunk(
  'books/createBook',
  async (book) => {
    try{
      const response = await axios.post(`${API_BASE_URL}`, book);
      console.log(response,"response here")
      return response.data;
    }
    catch(e){
      console.log(e,"Error jhere")
    }
  
  }
);

// Define thunk for fetching all books
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  }
);

// Define thunk for updating a book
export const updateBook = createAsyncThunk(
  'books/updateBook',
  async (book) => {
    console.log(book,"bookdata")
    const response = await axios.put(`${API_BASE_URL}/${book.id}`, book);
    return response.data;
  }
);

// Define thunk for deleting a book
export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id) => {
    await axios.delete(`${API_BASE_URL}/${id}`);
    return id;
  }
);

// Create books slice
const booksSlice = createSlice({
  name: 'books',
  initialState: booksInitialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle createBook.pending action
    builder.addCase(createBook.pending, (state) => {
      state.status = 'loading';
    });

    // Handle createBook.fulfilled action
    builder.addCase(createBook.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.books.push(action.payload);
    });

    // Handle createBook.rejected action
    builder.addCase(createBook.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });

    // Handle fetchBooks.pending action
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'loading';
    });

    // Handle fetchBooks.fulfilled action
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.books = action.payload;
    });

    // Handle fetchBooks.rejected action
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });

    // Handle updateBook.pending action
    builder.addCase(updateBook.pending, (state) => {
      state.status = 'loading';
    });

    // Handle updateBook.fulfilled action
    builder.addCase(updateBook.fulfilled, (state, action) => {
      state.status = 'succeeded';
      const index = state.books.findIndex((book) => book.id === action.payload.id);
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    });

    // Handle updateBook.rejected action
    builder.addCase(updateBook.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });

    // Handle deleteBook.pending action
    builder.addCase(deleteBook.pending, (state) => {
      state.status = 'loading';
    });

    // Handle deleteBook.fulfilled action
    builder.addCase(deleteBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.books.findIndex((book) => book.id === action.payload);
        if (index !== -1) {
          state.books.splice(index, 1);
        }
      });
      builder.addCase(deleteBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    }})
    export default booksSlice.reducer;