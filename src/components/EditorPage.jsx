import React, { Component } from "react";
import DocumentListComponent from "./DocumentListComponent";
import EditorComponent from "./EditorComponent";
import EditorPageLayout from "./EditorPageLayout";
import getDocumentsFromAPI from "../apiCalls/getDocuments";
import NavBar from "./NavBar";
//this renders a single document
export default class EditorPage extends Component {
  state = {
    documents: [],
    currentDocument: {}
  };

  componentDidMount = async () => {
    const docs = await getDocumentsFromAPI();
    this.setState({ documents: docs });
  };

  // gets called when user clicks on a document, updates state with current document
  updateCurrentDoc = selectedName => {
    //looks in the documents to find document by name
    let currentDoc = this.state.documents.find(
      document => document.name === selectedName
    );
    this.setState({ currentDocument: currentDoc });
  };
  //clears the current document so user can create a new doc
  handleCreateClick = event => {
    event.preventDefault();
    this.setState({
      currentDocument: { owners: "", lastChangeBy: "", content: [], name: "" }
    });
    console.log(this.state.currentDocument, "current");
  };
  updateDocumentBar = docs => {
    this.setState({ documents: docs });
  };

  render() {
    let { documents, currentDocument } = this.state;
    return (
      <div className="Editor-Page">
        <NavBar />
        <EditorPageLayout
          updateDocumentBar={this.updateDocumentBar}
          documents={documents}
          handleCreateClick={this.handleCreateClick}
          updateCurrentDoc={this.updateCurrentDoc}
        >
          <DocumentListComponent
            documents={documents}
            updateCurrentDoc={this.updateCurrentDoc}
          />
          <EditorComponent currentDocument={currentDocument} />
        </EditorPageLayout>
      </div>
    );
  }
}
