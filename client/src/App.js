import React, { Component } from "react";
import AppNavBar from "./components/AppNavBar";
import Bookshelf from "./components/Bookshelf";

import { Provider } from "react-redux";

import store from "./store";
import { loadUser } from "./actions/authActions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <Bookshelf key="Bookshelf" />
        </div>
      </Provider>
    );
  }
}

export default App;
