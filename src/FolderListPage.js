import React from "react";
import { Link, withRouter } from "react-router-dom";

function FolderListPage(getFolders) {
  return (
    <>
      <ul className="Notes">
        {[getFolders].map((folder) => {
          <li key={folder.id}>
            <Link to={`/folder/${folder.id}`}>{folder.name}</Link>{" "}
          </li>;
        })}
      </ul>
    </>
  );
}

export default withRouter(FolderListPage);
