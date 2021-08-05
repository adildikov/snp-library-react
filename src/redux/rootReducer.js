import { combineReducers } from "redux";
import librarySlice from "./library/slice";

const rootReducer = combineReducers({ library: librarySlice });

export default rootReducer;
