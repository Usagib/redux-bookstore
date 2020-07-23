import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import BookList from "./BookList";
import BookForm from "./BookForm";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

const App = () => (
  <div>
    <Provider store={store}>
      <BookList />
    </Provider>
    <BookForm />
  </div>
);

export default App;
