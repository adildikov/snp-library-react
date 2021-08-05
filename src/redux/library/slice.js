import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  currentBookId: 0,
  currentFilter: "",
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addBook(state, newBook) {
      state.books.push(newBook.payload);
    },
    deleteBook(state, id) {
      state.books.filter((book) => book.id !== id.payload);
    },
    editBook(state, id, newBook) {
      state.books.forEach((book) => {
        if (book.id === id.payload) {
          book = newBook.payload;
        }
      });
    },
    setBooks(state, newBooks) {
      state.books = newBooks.payload;
    },
    editCurrentBookId(state, id) {
      state.currentBookId = id.payload;
    },
    editCurrentFilter(state, filter) {
      state.currentFilter = filter.payload;
    },
  },
});

export default librarySlice.reducer;
export const {
  addBook,
  deleteBook,
  editBook,
  setBooks,
  editCurrentBookId,
  editCurrentFilter,
} = librarySlice.actions;
