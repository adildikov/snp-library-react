import { EDIT_CURR_FILTER } from "../constants";

export const editCurrentFilter = (filter) => ({
  type: EDIT_CURR_FILTER,
  filter,
});
