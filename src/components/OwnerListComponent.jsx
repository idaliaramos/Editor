import React from "react";
import { List, Image } from "semantic-ui-react";
import image from "../images/teacher.png";
import UserListItem from "./UserListItem";
const OwnerListComponent = props => {
  let { currentDocument } = props;
  console.log(currentDocument, "currentDocument");
  return (
    <div>
      {currentDocument.owners.map((owner, i) => {
        return (
          <List key={i}>
            <List.Item>
              <Image avatar src={image} />
              <List.Content>
                <List.Header as="a">{owner}</List.Header>
              </List.Content>
            </List.Item>
          </List>
          // <UserListItem name={owner} />
        );
      })}
    </div>
  );
};

export default OwnerListComponent;
