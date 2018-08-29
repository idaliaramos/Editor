import React from "react";
import UserListItem from "./UserListItem";
import { Popup, List, Item } from "semantic-ui-react";
// renders a list of owners on hover
const OwnerListComponent = props => {
  let { currentDocument } = props;
  return (
    <Popup
      trigger={
        <Item style={{ textDecoration: "underline" }}>Show All Owners</Item>
      }
      verticalOffset={5}
      position="bottom center"
      hoverable
    >
      <List selection verticalAlign="middle">
        <div>
          {currentDocument.owners &&
            currentDocument.owners.map((owner, i) => {
              return <UserListItem name={owner} />;
            })}
        </div>
      </List>
    </Popup>
  );
};

export default OwnerListComponent;
