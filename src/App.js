import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import EditorPage from "./components/EditorPage";

class App extends Component {
  state = {
    documents: {
      doc1: {
        owners: ["<user>", "<user>"],
        lastChangeBy: " <user>",
        content: "What is the difference between..."
      },
      doc2: {
        owners: ["idalia", "michael"],
        lastChangeBy: "brady",
        content: "hello i am content"
      }
    },
    currentDocument: {
      owners: ["idalia", "jean"],
      lastChangeBy: " Moth",
      content: "This is a test doc",
      name: "Document x",
      id: 1
    }
  };

  updateCurrentDoc = current => {
    let currentDoc = this.state.documents[current];
    this.setState({ currentDocument: currentDoc });
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <SignInComponent /> */}
        <EditorPage
          documents={this.state.documents}
          currentDocument={this.state.currentDocument}
          updateCurrentDoc={this.updateCurrentDoc}
        />
      </div>
    );
  }
}

export default App;
