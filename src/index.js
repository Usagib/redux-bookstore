import React from "react"; // eslint-disable-line no-unused-vars
import ReactDOM from "react-dom"; // eslint-disable-line no-unused-vars
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
// import PropTypes from 'prop-types';
import App from "./components/App";

const initialState = [
  {
    id: Math.round(Math.random() * 100),
    title: "Tom Swayer",
    category: "Kids",
  },
  {
    id: Math.round(Math.random() * 100),
    title: "The Crow",
    category: "Horror",
  },
  {
    id: Math.round(Math.random() * 100),
    title: "Tiger Tiger",
    category: "Sci-Fi",
  },
];

const store = createStore(rootReducer, { booksReducer: initialState });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
