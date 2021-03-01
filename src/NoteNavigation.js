import React, { Component } from "react";

import DataContext from "./DataContext";

export default class NoteNavigation extends Component {
  static contextType = DataContext;

  static defaultProps = {
    match: {
      params: {},
    },

    history: {},
  };

  render() {
    const { folders, notes } = this.context;

    const { noteid } = this.props.match.params;

    const getNote = notes.find((note) => note.id === noteid);

    const getFolder = folders.find(
      (folder) => -getNote && folder.id === getNote.folder_id
    );

    return (
      <div className="noteNavigation">
        <button onClick={() => this.props.history.goBack()}>
          &#171; RETURN
        </button>
        {getFolder && <h2>{getFolder.name}</h2>}
      </div>
    );
  }
}
