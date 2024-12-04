import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import { thunk } from "redux-thunk"; // Use named import
import { adminReducer } from "./reducers/adminReducer";
import { dashCategoryReducer } from "./reducers/dashCategoryReducer";
import { dashTagReducer } from "./reducers/dashTagReducer";
import { articalReducer } from "./reducers/articalReducer";
const rootReducer = combineReducers({
  adminReducer,
  category: dashCategoryReducer,
  tag: dashTagReducer,
  artical: articalReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
