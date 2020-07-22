import React from "react";
import BookList from "./BookList";
import BookForm from "./BookForm";
import rootReducer from "../reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BookList />
      </Provider>
      <BookForm />
    </div>
  );
};

export default App;
