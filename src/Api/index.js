export const apiUrl = "http://localhost:3001/books";

export const getBooksRequest = (apiUrl) => {
  return fetch(apiUrl);
};
