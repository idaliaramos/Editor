import React, { Component } from "react";
import DocumentListComponent from "./DocumentListComponent";
import EditorComponent from "./EditorComponent";
import EditorPageLayout from "./EditorPageLayout";
//this renders a single document
export default class EditorPage extends Component {
  render() {
    let { documents, currentDocument, updateCurrentDoc } = this.props;

    return (
      <div className="Editor-Page">
        <EditorPageLayout
          documents={documents}
          updateCurrentDoc={updateCurrentDoc}
          currentDocument={currentDocument}
        >
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
