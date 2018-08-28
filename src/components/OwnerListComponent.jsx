import React from "react";
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
