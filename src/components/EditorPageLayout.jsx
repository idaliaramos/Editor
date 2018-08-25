// import React, { Component } from "react";
//
// export default class EditorPageLayout extends Component {
//   render() {
//     const { children } = this.props;
//     return (
//       <div className="EditorPageLayout">
//         <div className="EditorPageLayout-sideBar">{children[0]}</div>
//         <div className="Editor">{children[1]}</div>
//       </div>
//     );
//   }
// }

//layout 2
// import React, { Component } from "react";
// import photo from "../images/scientist.png";
// import {
//   Button,
//   Header,
//   Icon,
//   Image,
//   Menu,
//   Segment,
//   Sidebar,
//   List
// } from "semantic-ui-react";
//
// export default class EditorPageLayout extends Component {
//   state = { visible: false };
//
//   handleButtonClick = () => {
//     this.setState({ visible: !this.state.visible });
//   };
//
//   handleSidebarHide = () => this.setState({ visible: false });
//
//   render() {
//     const { visible } = this.state;
//
//     const { children } = this.props;
//     return (
//       <div>
//         <Sidebar.Pushable as={Segment}>
//           <Sidebar
//             as={Menu}
//             animation="overlay"
//             direction="right"
//             vertical
//             visible={visible}
//           >
//             <Menu.Item as="a" header>
//               Owners
//             </Menu.Item>
//             <List.Item>
//               <Image avatar src={photo} />
//               <List.Header>Christian Rocha</List.Header>
//               Admin
//             </List.Item>
//             <Menu.Item as="a">Idalia</Menu.Item>
//             <Menu.Item as="a">Brady</Menu.Item>
//             <Menu.Item as="a">Nik</Menu.Item>
//             <Menu.Item as="a">Monsoor</Menu.Item>
//           </Sidebar>
//           <Sidebar.Pusher dimmed={visible}>
//             <Segment basic>
//               <div className="EditorPageLayout">
//                 <div className="EditorPageLayout-sideBar">{children[0]}</div>
//                 <div className="Editor">{children[1]}</div>
//               </div>
//             </Segment>
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  List
} from "semantic-ui-react";

export default class SidebarExampleSidebar extends Component {
  state = {
    visible: false,
    visible2: false,
    currentMessage: {}
  };

  handleButtonClick = () => this.setState({ visible: !this.state.visible });
  handleButtonClick2 = () => this.setState({ visible2: !this.state.visible2 });
  handleSidebarHide = () => this.setState({ visible: false });
  handleSidebarHide2 = () => this.setState({ visible2: false });
  updateCurrentDoc = event => {
    event.preventDefault();
    console.log("i am the event", event.target);
    console.log("value", event.target.value);
  };
  render() {
    const { visible, visible2 } = this.state;
    const { children } = this.props;
    return (
      <div>
        <Button onClick={this.handleButtonClick}>Owners</Button>
        <Button onClick={this.handleButtonClick2}>Documents</Button>
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
            <Menu.Item as="a" header>
              Owners
            </Menu.Item>
            <List.Item>
              <List.Header>Christian Rocha</List.Header>
              Admin
            </List.Item>
            <Menu.Item as="a">Idalia</Menu.Item>
            <Menu.Item as="a">Brady</Menu.Item>
            <Menu.Item as="a">Nik</Menu.Item>
            <Menu.Item as="a">Monsoor</Menu.Item>
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
          >
            <Menu.Item as="a" id="3453">
              <Icon name="home" />
              idalia
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              ramos
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              software
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              software
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              software
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              software
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">Application Content</Header>
              <div className="EditorPageLayout">
                <div className="EditorPageLayout-sideBar">{children[0]}</div>
                <div className="Editor">{children[1]}</div>
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
