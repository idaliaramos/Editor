import React, { Component } from "react";
import DocumentItem from "./DocumentItem";
//this renders all of the documents
export default class DocumentListComponent extends Component {
  static defaultProps = {
    documents: {}
  };
  render() {
    //deconstruct the docs off props
    const { documents } = this.props;
    console.log(documents, "DOCUMENTS!!");
    let listOfDocs = [];
    //iterate through the object to push the object with the name of the doc
    //inside the object
    for (let documentName of Object.keys(documents)) {
      console.log(documentName, "documentName");
      var doc = documents[documentName];
      doc["name"] = documentName;
      listOfDocs.push(doc);
    }
    return (
      //updateCurrentDoc will be called to set the state with the current doc
      <div className="Document-List" onClick={this.props.updateCurrentDoc}>
        {listOfDocs.length === 0 ? (
          <p className="">No notes availabe at this time.</p>
        ) : (
          listOfDocs.map(document => <DocumentItem document={document} />)
        )}
      </div>
    );
  }
}
