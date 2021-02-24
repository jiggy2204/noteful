import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FolderSideNav extends Component {
  render() {
    const { folders } = this.props;
    return (
      <nav className="Note__SideNav">
        {folders.map((folder) => {
          console.log(folder);
          <li key={folder.id}>
            <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
          </li>;
        })}
      </nav>
    );
  }
}
