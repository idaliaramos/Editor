import React, { Component } from "react";
//this renders a single document
export default class DocumentItem extends Component {
  render() {
    const { document } = this.props;
    console.log(document, "document");
    console.log(Object.keys(document), "doc in item");
    return (
      <div>
        <div>{Object.keys(document)}</div>
        <div>{document.owner}</div>
      </div>
    );
  }
}
