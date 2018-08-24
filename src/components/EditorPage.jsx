import React, { Component } from "react";
import DocumentList from "./DocumentList";
import EditorComponent from "./EditorComponent";
//this renders a single document
export default class EditorPage extends Component {
  render() {
    return (
      <div>
        <DocumentList />
        <EditorComponent />
      </div>
    );
  }
}
