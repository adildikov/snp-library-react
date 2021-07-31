const initialState = {
  books: [
    {
      id: 1,
      title: "First",
      author: "First Author",
      description: "First Description",
    },
    {
      id: 2,
      title: "Second",
      author: "Second Author",
      description: "Second Description",
    },
    {
      id: 3,
      title: "Third",
      author: "Third Author",
      description: "Third Description",
    },
  ],
};

const books = (state = initialState.books, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default books;
