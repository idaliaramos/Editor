import React, { Component } from "react";
import DocumentItem from "./DocumentItem";
//this renders all of the documents
export default class DocumentList extends Component {
  static defaultProps = {
    documents: {}
    // onSelect: () => {}
  };
  render() {
    //deconstruct the docs off props
    const { documents } = this.props;

    let documentArray = [];
    let transform = Object.entries(documents).forEach(([documentName, value]) =>
      documentArray.push({ documentName: value })
    );

    //documents will be passed in as props, for each document it will create a
    //document Item
    return (
      <div>
        {documentArray.length === 0 ? (
          <p className="">No notes availabe at this time.</p>
        ) : (
          documentArray.map(document => <DocumentItem document={document}/>)
        )}
      </div>
    );
  }
}
