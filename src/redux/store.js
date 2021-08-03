import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { save } from "redux-localstorage-simple";
import thunkMiddleware from "redux-thunk";

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

const configureStore = (preloadedStore) =>
  createStore(
    rootReducer,
    preloadedStore,
    composeEnhancers(
      applyMiddleware(save({ namespace: "books" }), thunkMiddleware)
    )
  );
const store = configureStore({});

export default store;
