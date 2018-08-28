import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class NavBar extends Component {
  render() {
    let name = localStorage.getItem("name");
    return (
      <Menu inverted secondary color="blue">
        <Menu.Item name="AppAcademy Collaboration" />
        <Menu.Menu position="right">
          <Menu.Item>
            <Menu.Item name={`hello ${name}`} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
