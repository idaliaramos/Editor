import React, { Component } from "react";
import DocumentListComponent from "./DocumentListComponent";
import EditorComponent from "./EditorComponent";
import EditorPageLayout from "./EditorPageLayout";
//this renders a single document
export default class EditorPage extends Component {
  render() {
    return (
      <div className="Editor-Page">
        <EditorPageLayout>
          <DocumentListComponent />
          <EditorComponent />
        </EditorPageLayout>
      </div>
    );
  }
}
