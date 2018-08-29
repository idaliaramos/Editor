import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import SignInComponent from "./components/SignInComponent";
import EditorPage from "./components/EditorPage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignInComponent} />
          <Route exact path="/editor" component={EditorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
