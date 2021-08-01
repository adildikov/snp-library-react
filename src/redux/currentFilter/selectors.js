import { createSelector } from "reselect";

const getCurrentFilterSelector = (state) => state.currentFilter;

export const getCurrentFilter = createSelector(
  getCurrentFilterSelector,
  (filter) => filter
);
