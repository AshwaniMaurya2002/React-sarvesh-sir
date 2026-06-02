import React from "react";
import { Provider } from "react-redux";
import ReduxCounter from "./ReduxCounter";
import { store } from "./store";

const ReduxApp = () => {
  return (
    <div>
      <h1>Learn Redux Tool kit</h1>
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    </div>
  );
};

export default ReduxApp;
