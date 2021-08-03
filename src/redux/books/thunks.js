import {
  apiUrl,
  deleteBookRequest,
  editBookRequest,
  getBooksRequest,
  getFilteredBooksRequest,
  postBookRequest,
} from "../../Api";
import { addBook, deleteBook, editBook, setBooks } from "./actions";

export const getBooksThunk = () => (dispatch) => {
  getBooksRequest(apiUrl).then((data) => {
    return data;
  });
};

export const initBooksThunk = () => (dispatch) => {
  getBooksRequest(apiUrl).then((data) => {
    dispatch(setBooks(data));
    return data;
  });
};

export const addBookThunk = (data) => (dispatch) => {
  postBookRequest(apiUrl, data).then((data) => {
    dispatch(addBook(data));
    return data;
  });
};

export const deleteBookThunk = (id) => (dispatch) => {
  deleteBookRequest(apiUrl, id).then((response) => {
    dispatch(deleteBook(response));
    dispatch(initBooksThunk());
    return response;
  });
};

export const editBookThunk = (id, data) => (dispatch) => {
  editBookRequest(apiUrl, id, data).then((response) => {
    dispatch(editBook(response));
    dispatch(initBooksThunk());
    return response;
  });
};

export const getFilteredBooksThunk = (str) => (dispatch) => {
  getFilteredBooksRequest(apiUrl, str).then((data) => {
    dispatch(setBooks(data));
    return data;
  });
};
