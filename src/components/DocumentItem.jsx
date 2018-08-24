import React from "react";
import { List } from "semantic-ui-react";

const DocumentItem = () => (
  <List divided relaxed>
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
        <List.Description as="a">Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
  </List>
);

export default DocumentItem;
