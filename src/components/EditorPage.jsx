import React, { Component } from "react";
import DocumentListComponent from "./DocumentListComponent";
import EditorComponent from "./EditorComponent";
import EditorPageLayout from "./EditorPageLayout";
//this renders a single document
export default class EditorPage extends Component {
  state = {
    currentDocument: {}
  };
  render() {
    let { documents, currentDocument } = this.props;

    return (
      <div className="Editor-Page">
        <EditorPageLayout documents={documents}>
          <DocumentListComponent />
          <EditorComponent
            documents={documents}
            currentDocument={currentDocument}
          />
        </EditorPageLayout>
      </div>
    );
  }
}
