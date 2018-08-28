import React, { Component } from "react";
// import OwnerListComponent from "./OwnerListComponent";
import DocumentListComponent from "./DocumentListComponent";
import { Button, Menu, Segment, Sidebar } from "semantic-ui-react";

export default class EditorPageLayout extends Component {
  state = {
    visible: false
  };

  //when user clicks it will open the document side bar
  handleButtonClick = () => this.setState({ visible: !this.state.visible });
  // this will close the document side bar
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    const { updateCurrentDoc, documents } = this.props;

    return (
      <div>
        <div className="Content-Buttons">
          <Button
            className="Button-Right"
            circular
            icon="add"
            size="large"
            color="black"
            onClick={this.props.handleCreateClick}
          />
          <Button className="Button-Right" onClick={this.handleButtonClick}>
            Documents
          </Button>
        </div>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="thin"
          >
            <DocumentListComponent
              updateCurrentDoc={updateCurrentDoc}
              documents={documents}
            />
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <div className="EditorPageLayout">
                <div className="Editor">{this.props.children[1]}</div>
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
