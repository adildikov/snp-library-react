import { combineReducers } from "redux";
import librarySlice from "./library/slice";

const rootReducer = combineReducers({ library: librarySlice.reducer });

export default rootReducer;
