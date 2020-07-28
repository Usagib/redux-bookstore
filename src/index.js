import React from "react"; // eslint-disable-line no-unused-vars
import ReactDOM from "react-dom"; // eslint-disable-line no-unused-vars
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
// import PropTypes from 'prop-types';
import App from "./components/App";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
