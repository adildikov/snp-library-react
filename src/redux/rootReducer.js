import { combineReducers } from "redux";
import books from "./books/reducer";
import currentBookId from "./currentBookId/reducer";

const rootReducer = combineReducers({ books, currentBookId });

export default rootReducer;
