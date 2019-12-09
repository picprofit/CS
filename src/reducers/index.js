import { combineReducers } from "redux";
import TitleReducer from './TitleReducer';

const rootReducer = combineReducers({
  title: TitleReducer
});

export default rootReducer;