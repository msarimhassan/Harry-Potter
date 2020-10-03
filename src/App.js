import React from "react";
import Game from "./components/ACGame.js";
import Header from "./components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./components/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Header} />
        <Route path="/hogwards" component={Game} />
      </div>
    </Router>
  );
};

export default App;
