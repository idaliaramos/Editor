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
      owners: ["idalia", "jean", ],
      lastChangeBy: " Moth",
      content: "This is a test doc",
      name: "Document x",
      id: 1
    }
  };
  //gets called when user clicks on a document, updates state with current document
  updateCurrentDoc = selectedName => {
    //looks in the documents to find document by name
    let currentDoc = this.state.documents[selectedName];
    this.setState({ currentDocument: currentDoc });
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <SignInComponent /> */}
        <EditorPage
          currentDocument={this.state.currenDocument}
          documents={this.state.documents}
          currentDocument={this.state.currentDocument}
          updateCurrentDoc={this.updateCurrentDoc}
        />
      </div>
    );
  }
}

export default App;
