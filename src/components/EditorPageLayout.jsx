import React, { Component } from "react";

export default class EditorPageLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="EditorPageLayout">
        <div className="EditorPageLayout-sideBar">{children[0]}</div>
        {children[1]}
      </div>
    );
  }
}
