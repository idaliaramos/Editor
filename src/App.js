import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import EditorPage from "./components/EditorPage";
import getDocuments from "./api-calls/getDocuments";

class App extends Component {
  state = {
    documents: {},
    currentDocument: {
      owners: ["idalia", "jean"],
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
  //make api call to fetch current documents
  componentDidMount() {
    return fetch("https://aachallengeone.now.sh/read").then(response =>
      response.json().then(documents => this.setState({ documents }))
    );
  }

  render() {
    console.log(this.state, "state");
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
