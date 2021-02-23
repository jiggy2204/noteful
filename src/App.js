import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import NoteListPage from "./NoteListPage";
import NotePage from "./NotePage";

import FolderListPage from "./FolderListPage";
import FolderPage from "./FolderPage";

import NOTES from "./dummy-store";

export default class App extends Component {
  state = {
    folders: NOTES.folders,
    notes: NOTES.notes,
  };

  handleNoteRetrieval(noteId) {}

  handleFolderRetrieval(folderId) {}

  render() {
    const { folders, notes } = this.state;

    return (
      <div className="mainPage">
        <Route
          path="/"
          render={(routeProps) => (
            <FolderPage folders={folders} notes={notes} other={routeProps} />
          )}
        />
        <header>
          <Link to="/">NOTEFUL</Link>
        </header>
        <main>
          <Route
            exact
            path="/"
            render={(routeProps) => {
              const { folderId } = routeProps.match.params;
              const notesFolder = { notes, folderId };
              return <NoteListPage notes={notesFolder} />;
            }}
          />
          <Route
            path="/note/:noteId"
            render={(routeProps) => {
              const { noteId } = routeProps.match.params;
              <NotePage note={note} />;
            }}
          />
          <Route
            path="/folder/:folderId"
            render={(routeProps) => {
              const { folderId } = routeProps.match.params;
            }}
          />
        </main>
      </div>
    );
  }
}
