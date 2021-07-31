import { GET_BOOKS, GET_BOOK_BY_ID } from "../constants";

export const getBookById = ({ id }) => ({
  type: GET_BOOK_BY_ID,
  id,
});
