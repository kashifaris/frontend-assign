import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

function dataReducer(state = { name: "", age: "",dates:[] }, action) {
  switch (action.type) {
    case "UPDATENAME":
      return { ...state, name: action.value };

    case "UPDATEAGE":
      return { ...state, age: action.value };
    case "UPDATEDATES":
      return { ...state, dates: action.value };

    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    data: dataReducer,
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
