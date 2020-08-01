import React from "react";
import "./App.css";
import Routes from "./Routes.js";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div>
        <Link to="/home">Go to Pokemon component</Link>
      </div>
      <div>
        <Link to="/welcome">Go to Welcome component</Link>
      </div>
      <div>
        <Link to="/hello">Go to Hello component</Link>
      </div>
      <Routes />
    </div>
  );
};

export default App;
