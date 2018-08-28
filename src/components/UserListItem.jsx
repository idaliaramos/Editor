import React from "react";
import { List, Image } from "semantic-ui-react";
import image from "../images/teacher.png";
const UserListItem = props => {
  return (
    <List horizontal relaxed="very">
      <List.Item>
        <Image avatar src={image} />
        <List.Content>
          <List.Header as="a">{props.name}</List.Header>
        </List.Content>
      </List.Item>
    </List>
  );
};
export default UserListItem;
