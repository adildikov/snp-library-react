import { EDIT_CURR_FILTER } from "../constants";

const currentFilterInit = "";

const currentFilter = (state = currentFilterInit, { type, filter }) => {
  switch (type) {
    case EDIT_CURR_FILTER:
      return filter;
    default:
      return state;
  }
};

export default currentFilter;
