import { ADD_BOOK } from "../constants";

const initialState = {
  books: [
    {
      id: 0,
      title: "The Lord of the Rings",
      author: "J. R. R. Tolkien",
      description:
        "The Lord of the Rings is an epic high fantasy novel[a] by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, on Earth at some distant time in the past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif/220px-First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
    },
    {
      id: 1,
      title: "First",
      author: "First Author",
      description: "First Description",
      image: "https://vjoy.cc/wp-content/uploads/2020/07/bezymyannyjav-5.jpg",
    },
    {
      id: 2,
      title: "Second",
      author: "Second Author",
      description: "Second Description",
      image: "https://data.whicdn.com/images/339215611/original.jpg",
    },
    {
      id: 3,
      title: "Third",
      author: "Third Author",
      description: "Third Description",
      image:
        "https://st.depositphotos.com/2044631/2014/i/600/depositphotos_20146623-stock-photo-tigers-face.jpg",
    },
    {
      id: 4,
      title: "WWWWWW WWW W WWWW WW20",
      author: "First Author",
      description: "First Description",
      image: "https://vjoy.cc/wp-content/uploads/2020/07/bezymyannyjav-5",
    },
    {
      id: 5,
      title: "Second",
      author: "Second Author",
      description: "Second Description",
      image: "https://data.whicdn.com/images/339215611/orig",
    },
    {
      id: 6,
      title: "Third",
      author: "Third Author",
      description: "Third Description",
      image:
        "https://st.depositphotos.com/2044631/2014/i/600/depositphotos_20146623-stock-photo-tigers-face.jpg",
    },
  ],
};

const books = (state = initialState.books, { type, newBook }) => {
  switch (type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: new Date().getTime(),
          title: newBook.title,
          author: newBook.author,
          description: newBook.description,
          image: newBook.image,
        },
      ];
    default:
      return state;
  }
};

export default books;
