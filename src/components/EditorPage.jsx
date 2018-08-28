import React, { Component } from "react";
import DocumentListComponent from "./DocumentListComponent";
import EditorComponent from "./EditorComponent";
import EditorPageLayout from "./EditorPageLayout";
import NavBar from "./NavBar";
//this renders a single document
export default class EditorPage extends Component {
  state = {
    documents: [],
    currentDocument: {}
  };

  componentDidMount = async () => {
    await this.getDocumentsFromAPI();
  };

  getDocumentsFromAPI = async () => {
    return fetch("https://aachallengeone.now.sh/read")
      .then(response => response.json())
      .then(documents => {
        let listOfDocs = [];
        //iterate through the object to push the object with the name of the doc
        //inside the object
        for (let documentName in documents) {
          var doc = documents[documentName];
          doc["name"] = documentName;
          listOfDocs.push(doc);
          this.setState({
            documents: listOfDocs,
            currentDocument: listOfDocs[0]
          });
        }
      });
  };
  // gets called when user clicks on a document, updates state with current document
  updateCurrentDoc = selectedName => {
    //looks in the documents to find document by name
    let currentDoc = this.state.documents.find(
      document => document.name === selectedName
    );
    this.setState({ currentDocument: currentDoc });
  };

  render() {
    let { documents, currentDocument } = this.state;
    return (
      <div className="Editor-Page">
        <NavBar />
        <EditorPageLayout
          documents={documents}
          updateCurrentDoc={this.updateCurrentDoc}
        >
          <DocumentListComponent
            documents={documents}
            updateCurrentDoc={this.updateCurrentDoc}
          />
          <EditorComponent
            documents={documents}
            currentDocument={currentDocument}
          />
        </EditorPageLayout>
      </div>
    );
  }
}
