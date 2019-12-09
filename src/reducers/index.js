import { combineReducers } from "redux";
import TitleReducer from './TitleReducer';
import FilterReducer from './FilterReducer';

const rootReducer = combineReducers({
  title: TitleReducer,
  filter: FilterReducer
});

export default rootReducer;