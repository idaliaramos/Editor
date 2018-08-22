import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

const SignInComponent = () => {
  const _onHandleSubmitName = event => {
    event.preventDefault();

    console.log("Hello", event.target);
  };
  return (
    <Segment inverted>
      <Form inverted onClick={_onHandleSubmitName}>
        <Form.Group widths="equal">
          <Form.Input fluid label="First name" placeholder="First name" />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </Segment>
  );
};
export default SignInComponent;
