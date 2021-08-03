import {
  apiUrl,
  deleteBookRequest,
  editBookRequest,
  getBooksRequest,
  postBookRequest,
} from "../../Api";
import { addBook, deleteBook, editBook, setBooks } from "./actions";

export const initBooksThunk = () => (dispatch) => {
  getBooksRequest(apiUrl)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then((data) => {
      dispatch(setBooks(data));
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const getBooksThunk = () => (dispatch) => {
  getBooksRequest(apiUrl)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const addBookThunk = (data) => (dispatch) => {
  postBookRequest(apiUrl, data)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then((data) => {
      dispatch(addBook(data));
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const deleteBookThunk = (id) => (dispatch) => {
  deleteBookRequest(apiUrl, id)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then((response) => {
      dispatch(deleteBook(response));
      dispatch(initBooksThunk());
      return response;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const editBookThunk = (id, data) => (dispatch) => {
  editBookRequest(apiUrl, id, data)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then((response) => {
      dispatch(editBook(response));
      dispatch(initBooksThunk());
      return response;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
