import { createSelector } from "reselect";

const getCurrentBookIdSelector = (state) => state.library.currentBookId;

export const getCurrentBookId = createSelector(
  getCurrentBookIdSelector,
  (id) => id
);
