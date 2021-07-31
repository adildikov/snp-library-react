import { createSelector } from "reselect";

const getCurrentBookIdSelector = (state) => state.currentBookId;

export const getCurrentBookId = createSelector(
  getCurrentBookIdSelector,
  (id) => id
);
