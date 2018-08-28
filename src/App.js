import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInComponent from "./components/SignInComponent";
import EditorPage from "./components/EditorPage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/login" component={SignInComponent} />
          <Route exact path="/editor" component={EditorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
