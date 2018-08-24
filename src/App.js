import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import EditorPage from "./components/EditorPage";

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
        {/* <SignInComponent /> */}
        <EditorPage documents={this.state.documents} />
      </div>
    );
  }
}

export default App;
