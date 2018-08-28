import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInComponent from "./components/SignInComponent";
import EditorPage from "./components/EditorPage";
import EditorPageLayout from "./components/EditorPageLayout";
class App extends Component {
  // state = {
  //   documents: [],
  //   currentDocument: {
  //     owners: ["idalia", "jean"],
  //     lastChangeBy: " Moth",
  //     content: "This is a test doc",
  //     name: "Document x",
  //     id: 1
  //   }
  // };
  //gets called when user clicks on a document, updates state with current document
  updateCurrentDoc = selectedName => {
    console.log(selectedName, "selectedName");
    //looks in the documents to find document by name
    let currentDoc = this.state.documents.find(
      document => document.name === selectedName
    );
    this.setState({ currentDocument: currentDoc });
  };
  //make api call to fetch current documents
  // componentDidMount() {
  //   return fetch("https://aachallengeone.now.sh/read").then(response =>
  //     response.json().then(documents => {
  //       let listOfDocs = [];
  //       //iterate through the object to push the object with the name of the doc
  //       //inside the object
  //       for (let documentName of Object.keys(documents)) {
  //         var doc = documents[documentName];
  //         doc["name"] = documentName;
  //         listOfDocs.push(doc);
  //         this.setState({
  //           documents: listOfDocs,
  //           currentDocument: listOfDocs[0]
  //         });
  //       }
  //     })
  //   );
  // }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/login" component={SignInComponent} />
          {/* <SignInComponent /> */}

          <Route exact path="/editor" component={EditorPage} />
          {/* <EditorPage
              currentDocument={this.state.currenDocument}
              documents={this.state.documents}
              currentDocument={this.state.currentDocument}
              updateCurrentDoc={this.updateCurrentDoc}
            /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
