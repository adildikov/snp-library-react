import { apiUrl, getBooksRequest, postBooksRequest } from "../../Api";
import { addBook } from "./actions";

export const initBooksThunk = () => (dispatch) => {
  getBooksRequest(apiUrl)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then((data) => {
      data.forEach((book) => {
        dispatch(addBook(book));
      });
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
