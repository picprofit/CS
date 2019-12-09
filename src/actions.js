import { SET_TITLE, SET_FILTER } from "./constants";

export const setTitle = title => ({
  type: SET_TITLE,
  title
});

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});