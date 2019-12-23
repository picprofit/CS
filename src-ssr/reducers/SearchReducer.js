import { SET_SEARCH } from '../constants';

const SearchReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return action.search;
    default:
      return state;
  }
};

export default SearchReducer;