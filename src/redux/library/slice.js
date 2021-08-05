import { createSlice } from "@reduxjs/toolkit";

const librarySlice = createSlice({
  name: "library",
  initialState: {
    books: [],
    currentBookId: 0,
    currentFilter: "",
  },
  reducers: {
    addBook(state, { newBook }) {
      state.books.push(newBook);
    },
    deleteBook(state, { id }) {
      state.books.filter((book) => book.id !== id);
    },
    editBook(state, { id, newBook }) {
      state.books.forEach((book) => {
        if (book.id === id) {
          book.title = newBook.title;
          book.author = newBook.author;
          book.description = newBook.description;
          book.image = newBook.image;
        }
      });
    },
    setBooks(state, newBooks) {
      state.books = newBooks.payload;
    },
    editCurrentBookId(state, { id }) {
      state.currentBookId = id;
    },
    editCurrentFilter(state, { filter }) {
      state.currentFilter = filter;
    },
  },
});

export default librarySlice;
export const {
  addBook,
  deleteBook,
  editBook,
  setBooks,
  editCurrentBookId,
  editCurrentFilter,
} = librarySlice.actions;
