import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";
import image from "../images/teacher.png";
//renders the editor, it contains a title input, a body input.
// on save it will make a post to the api
export default class EditorComponent extends Component {
  constructor(props) {
    super(props);
    const { currentDocument } = this.props;
    this.state = {
      name: currentDocument.name,
      content: currentDocument.content
    };
  }

  render() {
    let { document, currentDocument } = this.props;
    console.log(this.state, "state");
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
                value={this.state.name || ""}
                onChange={event => {
                  this.setState({ name: event.target.value });
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
              value={this.state.content || ""}
              onChange={event => {
                this.setState({ content: event.target.value });
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
    let content = this.state.content;

    let docInfo = {
      issuer: user,
      content: content
    };
    return fetch(`https://aachallengeone.now.sh/update/${this.state.name}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(docInfo)
    }).then(response => response.json());
    //onSave will call the api with the info
    // onSave(docInfo);
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
