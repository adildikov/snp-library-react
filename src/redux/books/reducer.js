import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from "../constants";

const initialState = {
  books: [],
};

const books = (state = initialState.books, { type, newBook, id }) => {
  switch (type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: id ? id : new Date().getTime(),
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
    default:
      return state;
  }
};

export default books;
