// redux/store.js
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import reducer from "../reducer/reducer";

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;
