import React, { Component } from "react";
import DocumentItem from "./DocumentItem";
//this renders all of the documents
export default class DocumentListComponent extends Component {
  static defaultProps = {
    documents: {}
  };
  render() {
    //deconstruct the docs off props
    // const { documents } = this.props;
    let documents = [
      {
        doc1: {
          owners: ["<user>", "<user>"],
          lastChangeBy: " <user>",
          content: "<content>"
        }
      },
      {
        doc2: {
          owners: ["idalia", "michael"],
          lastChangeBy: "brady",
          content: "hello i am content"
        }
      }
    ];

    console.log(documents, "DOCUMENTS");

    let documentArray = [];
    let transform = Object.entries(documents).forEach(([name, value]) => {
      console.log(name, "NAME ");
      console.log(value, " VALUE");
      //TODO:rearrange doc strucure
      documentArray.push({ name: value });
    });
    console.log(Object.values(documents));
    //documents will be passed in as props, for each document it will create a
    //document Item
    return (
      <div className="Document-List">
        {documentArray.length === 0 ? (
          <p className="">No notes availabe at this time.</p>
        ) : (
          documentArray.map(document => <DocumentItem document={document} />)
        )}
      </div>
    );
  }
}
