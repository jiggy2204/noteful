import React, { Component } from "react";
import { Route, NavLink, Link } from "react-router-dom";

import DataContext from "./DataContext";

import NoteNavigation from "./NoteNavigation";

class Nav extends Component {
  static contextType = DataContext;

  render() {
    const { folders } = this.context;

    const folderNavBtns = folders.map((folder) => (
      <NavLink to={`/folder/${folder.id}`} key={folder.id}>
        <button id={folder.id}>{folder.name}</button>
      </NavLink>
    ));

    return (
      <section className="Nav">
        <ul className="nav-items">
          <Route exact path="/">
            {folderNavBtns}
            <NavLink to={`/add-folder`}>
              <button className="addFolder">&#43; Add Folder</button>
            </NavLink>
          </Route>
          <Route path="/notes/:noteid" component={NoteNavigation} />
          <Route path="/folder/:folderid">
            {folderNavBtns}
            <Link to={`/add-folder`}>
              <button className="addFolder">&#43; Add Folder</button>
            </Link>
          </Route>
          <Route path="/add-folder" component={NoteNavigation} />
          <Route path="/add-note" component={NoteNavigation} />
        </ul>
      </section>
    );
  }
}

export default Nav;
