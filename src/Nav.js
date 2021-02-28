import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import DataContext from "./DataContext";

class Nav extends Component {
  static contextType = DataContext;

  render() {
    const { folders } = this.context;

    return (
      <section className="Nav">
        <ul className="nav-items">
          <Route exact path="/">
            {folders.map((folder) => {
              <NavLink to={`/folder/${folder.id}`} key={folder.id}>
                <button id={folder.id}>{folder.name}</button>
              </NavLink>;
            })}
          </Route>
        </ul>
      </section>
    );
  }
}

export default Nav;
