
import React from "react";
import UserListItem from "./UserListItem";
import { Header, Button, Popup, Grid, List, Image } from "semantic-ui-react";

const PopupExampleFlowing = props => {
  let { currentDocument } = props;
  return (
    <Popup
      trigger={<Button>Show All Owners</Button>}
      verticalOffset={5}
      position="bottom center"
      hoverable
    >
      <List selection verticalAlign="middle">
        <div>
          {currentDocument.owners.map((owner, i) => {
            return <UserListItem name={owner} />;
          })}
        </div>
      </List>
    </Popup>
  );
};

export default PopupExampleFlowing;
