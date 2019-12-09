import { compose, createStore } from "redux";

import rootReducer  from './reducers';

const initialState = {
  title: 'Home'
};

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers();

const store = createStore(
  rootReducer,
  initialState,
  enhancer
);


export default store;