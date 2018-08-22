import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default class SignInComponent extends Component {
  state = {
    name: ""
  };
  onSubmitName = event => {
    event.preventDefault();
    this.setState({ name: event.target.value });
    localStorage.setItem("name", this.state.name);
  };
  render() {
    console.log(this.state, "state");
    return (
      <Segment inverted>
        <Form inverted onChange={this.onSubmitName}>
          <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    );
  }
}
