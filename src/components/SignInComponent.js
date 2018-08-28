import React, { Component } from "react";
import { Button, Form, Segment, Container, Header } from "semantic-ui-react";
//SignInComponent takes in the name of the user and saves it to localStorage
export default class SignInComponent extends Component {
  //onSubmitName sets the name to local storage
  onSetName = event => {
    event.preventDefault();
    localStorage.setItem("name", event.target.value);
  };
  //takes the user to the editor after they have entered their name
  goToEditor = () => {
    this.props.history.push("/editor");
  };
  //renders a form with a single input field for the name
  render() {
    return (
      <div className="Sign-In-Component">
        <Container inverted>
          <Header as="h2">Sign in to Edit Documents</Header>
          <Segment inverted color="blue">
            <Form inverted onChange={this.onSetName} onSubmit={this.goToEditor}>
              <Form.Group widths="equal">
                <Form.Input fluid label="First name" placeholder="First name" />
              </Form.Group>

              <Button type="submit">Submit</Button>
            </Form>
          </Segment>
        </Container>
      </div>
    );
  }
}
