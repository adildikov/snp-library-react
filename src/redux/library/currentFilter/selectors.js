import { createSelector } from "reselect";

const getCurrentFilterSelector = (state) => state.library.currentFilter;

export const getCurrentFilter = createSelector(
  getCurrentFilterSelector,
  (filter) => filter
);
