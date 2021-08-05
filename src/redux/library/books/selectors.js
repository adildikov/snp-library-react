import { createSelector } from "reselect";

const getBooksSelector = (state) => state.library.books;

export const getBooks = createSelector(getBooksSelector, (books) => books);
