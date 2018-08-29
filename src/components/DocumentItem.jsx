import React from "react";
import { List, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";
const DocumentItem = props => {
  //sets the currentDocument to the one clicked and closes the side bar
  const handleClickItem = () => {
    props.updateCurrentDoc(props.document.name);
    props.handleSidebarHide();
  };
  return (
    <Segment onClick={handleClickItem} className="Document-Item">
      <List divided>
        <List.Item>
          <List.Content>
            <List.Header as="a">{props.document.name}</List.Header>
            <List.Description as="a">
              {props.document.content.substring(0, 25)}
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Segment>
  );
};
DocumentItem.propTypes = {
  document: PropTypes.object
};
export default DocumentItem;
