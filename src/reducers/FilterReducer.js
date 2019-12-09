import { SET_FILTER, RESET_FILTER } from '../constants';

const FilterReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    case RESET_FILTER:
      return '';
    default:
      return state;
  }
};

export default FilterReducer;