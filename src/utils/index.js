export const isValidImage = (url) => {
  return /.(jpeg|jpg|png|gif)\b/g.test(url);
};

export const stringCutIfNeeded = (string, length) => {
  if (string.length > length) {
    return string.slice(0, length).concat("...");
  } else {
    return string;
  }
};
