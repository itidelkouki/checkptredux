import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import Store from "./js/store/store";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  rootElement
);
