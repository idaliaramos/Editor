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

    let listOfDocs = [];
    //iterate through the object to push the object with the name of the doc
    //inside the object
    for (let documentName of Object.keys(documents)) {
      var doc = documents[documentName];
      doc["name"] = documentName;
      doc["id"] = Math.floor(Math.random() * 1000 + 1);
      listOfDocs.push(doc);
    }

    return (
      //updateCurrentDoc will be called to set the state with the current doc
      <div className="Document-List">
        {listOfDocs.length === 0 ? (
          <p className="">No notes availabe at this time.</p>
        ) : (
          listOfDocs.map(document => {
            return (
              <DocumentItem
                document={document}
                key={document.name}
                updateCurrentDoc={this.props.updateCurrentDoc}
              />
            );
          })
        )}
      </div>
    );
  }
}
