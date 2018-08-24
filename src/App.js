import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignInComponent from "./components/SignInComponent";
import DocumentListComponent from "./components/DocumentListComponent";

class App extends Component {
  state = {
    documents: {
      doc1: {
        owners: ["<user>", "<user>"],
        lastChangeBy: " <user>",
        content: "<content>"
      },
      doc2: {
        owners: ["idalia", "michael"],
        lastChangeBy: "brady",
        content: "hello i am content"
      }
    }
  };
  render() {
    return (
      <div className="App">
        <SignInComponent />
        <DocumentListComponent documents={this.state.documents} />
      </div>
    );
  }
}

export default App;
