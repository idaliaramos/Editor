import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
//SignInComponent takes in the name of the user and saves it to localStorage
export default class SignInComponent extends Component {
  //onSubmitName sets the name to local storage
  onSubmitName = event => {
    event.preventDefault();
    localStorage.setItem("name", event.target.value);
  };

  //renders a form with a single input field for the name
  render() {
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
