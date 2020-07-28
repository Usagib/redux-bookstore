import { combineReducers } from "redux";
import booksReducer from "./books";
import filter from "./filter";

export default combineReducers({
  books: booksReducer,
  filter,
});
