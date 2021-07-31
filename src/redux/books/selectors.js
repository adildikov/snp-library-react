import { createSelector } from "reselect";

const getBooksSelector = (state) => state.books;

export const getBooks = createSelector(getBooksSelector, (books) => books);
