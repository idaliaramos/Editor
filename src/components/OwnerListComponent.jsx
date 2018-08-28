import React from "react";
import { List, Image } from "semantic-ui-react";
import image from "../images/teacher.png";
import UserListItem from "./UserListItem";
const OwnerListComponent = props => {
  let { currentDocument } = props;

  return (
    <div>
      {currentDocument.owners.map((owner, i) => {
        return <UserListItem name={owner} />;
      })}
    </div>
  );
};

export default OwnerListComponent;
