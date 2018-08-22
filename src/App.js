import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignInComponent from "./components/SignInComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignInComponent />
      </div>
    );
  }
}

export default App;
