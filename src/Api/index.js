export const apiUrl = "http://localhost:3001/books";

export const getBooksRequest = (apiUrl) => {
  return fetch(apiUrl);
};

export const postBookRequest = (apiUrl, data) => {
  return fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteBookRequest = (apiUrl, id) => {
  return fetch(apiUrl + `/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
