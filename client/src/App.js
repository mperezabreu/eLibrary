import React, { Component } from "react";
import AppNavBar from "./components/AppNavBar";
import Bookshelf from "./components/Bookshelf";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <Bookshelf />
    </div>
  );
}

export default App;
