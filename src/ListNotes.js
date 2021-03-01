import React, { Component } from "react";
import DataContext from "./DataContext";

import Note from "./Note";

export default class ListNotes extends Component {
  static contextType = DataContext;

  static defaultProps = {
    match: {
      params: {},
    },
    history: {},
  };

  render() {
    const { folders, notes } = this.context;
    const { folderid } = this.props.match.params;

    const folderNotes = !folders.id
      ? notes
      : notes.filter((note) => note.folderId === parseInt(folderid));

    const listNotes = folderNotes.map((note) => (
      <Note key={note.id} noteInfo={note} />
    ));

    return <div className="ListNotes">{listNotes}</div>;
  }
}
