import React from "react";
import AppNavBar from "./components/AppNavBar";
import Bookshelf from "./components/Bookshelf";

import { Provider } from "react-redux";

import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <Bookshelf key="Bookshelf" />
      </div>
    </Provider>
  );
}

export default App;
