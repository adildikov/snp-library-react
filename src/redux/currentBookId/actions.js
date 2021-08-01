import { EDIT_CURR_BOOK_ID } from "../constants";

export const editCurrentBookId = (id) => ({
  type: EDIT_CURR_BOOK_ID,
  id,
});
