import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK, SET_BOOKS } from "../constants";

const initialState = {
  books: [],
};

const books = (state = initialState.books, { type, newBook, id, newBooks }) => {
  switch (type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: newBook.id,
          title: newBook.title,
          author: newBook.author,
          description: newBook.description,
          image: newBook.image,
        },
      ];
    case DELETE_BOOK:
      return [...state].filter((book) => book.id !== id);
    case EDIT_BOOK:
      return [...state].map((book) => {
        if (book.id === id) {
          book.title = newBook.title;
          book.author = newBook.author;
          book.description = newBook.description;
          book.image = newBook.image;
        }
        return book;
      });
    case SET_BOOKS:
      return newBooks;
    default:
      return state;
  }
};

export default books;
