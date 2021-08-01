import { EDIT_CURR_BOOK_ID } from "../constants";

const currentBookIdInit = 0;

const currentBookId = (state = currentBookIdInit, { type, id }) => {
  switch (type) {
    case EDIT_CURR_BOOK_ID:
      return id;
    default:
      return state;
  }
};

export default currentBookId;
