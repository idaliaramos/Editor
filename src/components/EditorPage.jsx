import React, { Component } from "react";
import DocumentListComponent from "./DocumentListComponent";
import EditorComponent from "./EditorComponent";
//this renders a single document
export default class EditorPage extends Component {
  render() {
    return (
      <div className="Editor-Page">
        <DocumentListComponent />
        <EditorComponent />
      </div>
    );
  }
}
