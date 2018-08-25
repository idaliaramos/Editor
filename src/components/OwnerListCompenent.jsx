import React from "react";
import { List, Image } from "semantic-ui-react";

const OwnerListComponent = () => (
  //TODO: get owners from props and map, for each owner creat a list item
  <List>
    <List.Item>
      <Image avatar src="/images/avatar/small/rachel.png" />
      <List.Content>
        <List.Header as="a">Rachel</List.Header>
        <List.Description>
          Last seen watching{" "}
          <a>
            <b>Arrested Development</b>
          </a>{" "}
          just now.
        </List.Description>
      </List.Content>
    </List.Item>
  </List>
);

export default ListExampleImage;
