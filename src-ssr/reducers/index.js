import { combineReducers } from "redux";
import TitleReducer from './TitleReducer';
import FilterReducer from './FilterReducer';
import SearchReducer from './SearchReducer';

const rootReducer = combineReducers({
  title: TitleReducer,
  filter: FilterReducer,
  search: SearchReducer
});

export default rootReducer;