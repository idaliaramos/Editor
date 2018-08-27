import React from "react";
import { List, Segment } from "semantic-ui-react";

const DocumentItem = props => {
  const handleClickItem = () => {
    console.log(props.document.name, "docname");
    props.updateCurrentDoc(props.document.name);
  };
  return (
    <Segment onClick={handleClickItem}>
      <List divided relaxed>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">{props.document.name}</List.Header>
            <List.Description as="a">{props.document.content}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Segment>
  );
};

export default DocumentItem;
