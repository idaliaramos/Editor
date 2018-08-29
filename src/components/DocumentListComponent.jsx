import React, { Component } from "react";
import PropTypes from "prop-types";
import DocumentItem from "./DocumentItem";
//this renders all of the documents
export default class DocumentListComponent extends Component {
  render() {
    //deconstruct the docs off props
    const { documents } = this.props;

    return (
      //updateCurrentDoc will be called to set the state with the current doc
      <div className="Document-List">
        {documents.length === 0 ? (
          <p className="">No notes availabe at this time.</p>
        ) : (
          documents.map(document => {
            return (
              <DocumentItem
                document={document}
                key={document.name}
                handleSidebarHide={this.props.handleSidebarHide}
                updateCurrentDoc={this.props.updateCurrentDoc}
              />
            );
          })
        )}
      </div>
    );
  }
}
DocumentListComponent.propTypes = {
  documents: PropTypes.object
};
