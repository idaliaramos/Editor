import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class NavBar extends Component {
  render() {
    return (
      <Menu inverted>
        <Menu.Item name="AppAcademy Collaboration" />
      </Menu>
    );
  }
}
