import React, { Component } from "react";
import DocumentItem from './components/DocumentItem'
//this renders all of the documents
export default class DocumentList extends Component {
  render() {
    //documents will be passed in , for each document it will create a
    //document Item
    return  this.props.documents.map(document => (
      <DocumentItem />
    ))
  }
}
