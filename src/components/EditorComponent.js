import React, { Component } from "react";
import { Confirm } from "semantic-ui-react";
import UserListItem from "./UserListItem";
import OwnerListComponent from "./OwnerListComponent";
//renders the editor, it contains a title input, a body input.
// on save it will make a post to the api
export default class EditorComponent extends Component {
  constructor(props) {
    super(props);
    let { currentDocument } = this.props;
    //set the state with the current document values
    this.state = {
      name: currentDocument.name,
      content: currentDocument.content,
      show: false,
      open: false,
      isSuccessful: true
    };
  }
  //on show will change to true when user submits an edit
  show = () => this.setState({ open: true });
  handleConfirm = () => this.setState({ open: false });

  render() {
    let { currentDocument } = this.props;
    return (
      <div>
        <form className="Editor" onSubmit={this._handleSubmit}>
          <div className="Editor-titleInputWrapper">
            <div className="Editor-titleInput">
              <input
                className="Editor-titleInput"
                type="text"
                name="titleInput"
                placeholder="Add a document title"
                value={this.state.name || ""}
                onChange={event => {
                  this.setState({ name: event.target.value });
                }}
              />
            </div>
            {/* shows last owner that changed the document */}
            <div className="Changed-by-wrapper">
              <div>Last Changed by:</div>
              <UserListItem name={currentDocument.lastChangeBy} />
              <div>
                <OwnerListComponent currentDocument={currentDocument} />
              </div>
            </div>
          </div>
          <div />
          <div className="Editor-bodyInputWrapper">
            <textarea
              className="Editor-bodyInput"
              name="bodyInput"
              placeholder="enter content"
              value={this.state.content || ""}
              onChange={event => {
                this.setState({ content: event.target.value });
              }}
            />
          </div>
          <div className="Editor-saveButtonWrapper">
            <button
              onClick={this.show}
              className="Editor-saveButton"
              type="submit"
            >
              Done
            </button>
            <Confirm
              open={this.state.open}
              content={
                this.state.isSuccessful
                  ? "Your message was edited!"
                  : "Action failed, try again."
              }
              onConfirm={this.handleConfirm}
            />
          </div>
        </form>
        <div />
      </div>
    );
  }
  //handle submit will take the information and
  // _handleSubmit = event => {
  //   event.preventDefault();
  //   let user = localStorage.getItem("name");
  //   let content = this.state.content;
  //   let docInfo = {
  //     issuer: user,
  //     content: content
  //   };
  //   return fetch(`https://aachallengeone.now.sh/update/${this.state.name}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(docInfo)
  //   }).then(response => response.json()).catch(err => {
  //   this.setState({isSuccessful: false})
  //   });
  // };

  _handleSubmit = async event => {
    event.preventDefault();
    let user = localStorage.getItem("name");
    let content = this.state.content;
    let docInfo = {
      issuer: user,
      content: content
    };
    try {
      const response = await fetch(
        `https://aachallengeone.now.sh/update/${this.state.name}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ docInfo })
        }
      );
    } catch (e) {
      this.setState({ isSuccessful: false });
    }
  };

  //will update the state with the currentDocument selected
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.currentDocument &&
      nextProps.currentDocument.name !== this.props.currentDocument.name
    ) {
      this.setState({
        name: nextProps.currentDocument.name,
        content: nextProps.currentDocument.content
      });
    }
  }
}
