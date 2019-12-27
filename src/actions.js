import { SET_TITLE, SET_FILTER, SET_SEARCH } from "./constants";

export const setTitle = title => ({
  type: SET_TITLE,
  title
});

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});

export const setSearch = search => ({
  type: SET_SEARCH,
  search
});