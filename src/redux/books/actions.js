import { ADD_BOOK } from "../constants";

export const addBook = (newBook) => ({
  type: ADD_BOOK,
  newBook,
});
