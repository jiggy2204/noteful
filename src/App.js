import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";

import NotesMainNav from "./NotesMainNav";
import NotePath from "./NotePath";

import FolderSideNav from "./FolderSideNav";
import FolderLink from "./FolderLink";

import NOTES from "./dummy-store";

const notes = [],
  folders = [];

export default class App extends Component {
  state = {
    notes,
    folders,
  };

  componentDidMount() {
    this.setState({
      notes: NOTES.notes,
      folders: NOTES.folders,
    });
  }

  handleNoteChange(noteId) {}

  render() {
    const { folders, notes } = this.state;

    return (
      <div className="mainPage">
        <header className="headerNav">
          <Link to="/">NOTEFUL</Link>
        </header>
        <Route
          path="/folder/:folderId"
          render={(routeProps) => {
            return (
              <FolderLink folders={folders} notes={notes} {...routeProps} />
            );
          }}
        />
        <Route
          exact
          path="/"
          render={() => <FolderSideNav folders={folders} />}
        />
        <Route exact path="/" render={() => <NotesMainNav notes={notes} />} />
        <Route
          path="/note/:id"
          render={(renderProps) => {
            return (
              <NotePath folders={folders} notes={notes} {...renderProps} />
            );
          }}
        />
      </div>
    );
  }
}
