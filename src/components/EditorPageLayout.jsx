import React, { Component } from "react";
import OwnerListComponent from "./OwnerListComponent";
import DocumentListComponent from "./DocumentListComponent";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  List,
  Popup
} from "semantic-ui-react";

export default class EditorPageLayout extends Component {
  state = {
    visible: false,
    visible2: false,
    currentMessage: {}
  };
  //when user clicks it will open the document side bar
  handleButtonClick = () => this.setState({ visible: !this.state.visible });
  // this will close the document side bar
  handleSidebarHide = () => this.setState({ visible: false });
  // when user clicks it will open the owners side bar
  handleSidebarHide2 = () => this.setState({ visible2: false });
  // this will close the  owner side bar
  handleButtonClick2 = () => this.setState({ visible2: !this.state.visible2 });
  updateCurrentDoc = event => {
    console.log(event.target, "EV");
    event.preventDefault();
  };
  render() {
    const { visible, visible2 } = this.state;
    const { children } = this.props;
    return (
      <div>
        <div className="Content-Buttons">
          <Button className="Button-Right" onClick={this.handleButtonClick}>
            Documents
          </Button>
          <Popup
            trigger={
              <Button
                className="Button-Left"
                icon
                size="large"
                onClick={this.handleButtonClick2}
              >
                <Icon name="group" />
              </Button>
            }
            content="Show all owners"
            on="click"
            on="hover"
          />
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
            {/* Documents */}
            <DocumentListComponent
              updateCurrentDoc={this.updateCurrentDoc}
              documents={this.props.documents}
            />
          </Sidebar>

          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={this.handleSidebarHide2}
            vertical
            visible={visible2}
            width="thin"
            onClick={this.updateCurrentDoc}
            direction="right"
          >
            <OwnerListComponent />
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              {/* <Header as="h3">Application Content</Header> */}
              <div className="EditorPageLayout">
                {/* <div className="EditorPageLayout-sideBar">{children[0]}</div> */}
                <div className="Editor">{children[1]}</div>
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
