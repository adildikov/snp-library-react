import { combineReducers } from "redux";
import books from "./books/reducer";
import currentBookId from "./currentBookId/reducer";
import currentFilter from "./currentFilter/reducer";

const rootReducer = combineReducers({ books, currentBookId, currentFilter });

export default rootReducer;
