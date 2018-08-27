import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";
import image from "../images/teacher.png";
//renders the editor, it contains a title input, a body input.
// on save it will make a post to the api
export default class EditorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  render() {
    let { document, currentDocument } = this.props;
    return (
      <div>
        <form className="Editor" onSubmit={this._handleSubmit}>
          <div className="Editor-titleInputWrapper">
            <div>
              <input
                className="Editor-titleInput"
                type="text"
                name="titleInput"
                placeholder={currentDocument.name}
                value={this.state.title || ""}
                onChange={event => {
                  this.setState({ title: event.target.value });
                }}
              />
            </div>
            <div className="Changed-by-wrapper">
              <div>Last Changed by:</div>
              <List horizontal relaxed="very">
                <List.Item>
                  <Image avatar src={image} />
                  <List.Content>
                    <List.Header as="a">
                      {currentDocument.lastChangeBy}
                    </List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </div>
          </div>

          <div className="Editor-bodyInputWrapper">
            <textarea
              className="Editor-bodyInput"
              name="bodyInput"
              placeholder={currentDocument.content}
              value={this.state.body || ""}
              onChange={event => {
                this.setState({ body: event.target.value });
              }}
            />
          </div>
          <div className="Editor-saveButtonWrapper">
            <button className="Editor-saveButton" type="submit">
              Done
            </button>
          </div>
        </form>
      </div>
    );
  }
  //handle submit will take the information and
  _handleSubmit = event => {
    event.preventDefault();
    // let user = localStorage.getItem("name");
    let user = "idalia";
    let content = this.state.body;
    console.log(this.state.body, "this state body");
    let docInfo = {
      issuer: user,
      content: content
    };
    console.log(docInfo, "docInfo");
    //onSave will call the api with the info
    // onSave(docInfo);
  };
}
