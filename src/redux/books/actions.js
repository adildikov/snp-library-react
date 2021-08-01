import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from "../constants";

export const addBook = (newBook) => ({
  type: ADD_BOOK,
  newBook,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export const editBook = (id, newBook) => ({
  type: EDIT_BOOK,
  id,
  newBook,
});
