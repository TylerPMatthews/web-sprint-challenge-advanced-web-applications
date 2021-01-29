import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Util/PrivateRoute";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";
import ColorList from "./components/ColorList";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          
          <PrivateRoute path="/bubbles">
            <BubblePage />
          </PrivateRoute>

          <Route exact path="/" component={Login} />
        </Switch>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
