import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class NavBar extends Component {
  render() {
    return (
      <Menu inverted color="blue">
        <Menu.Item name="AppAcademy Collaboration" />
      </Menu>
    );
  }
}
