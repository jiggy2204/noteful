import React, { Component } from "react";
import DataContext from "./DataContext";

import Note from "./Note";

export default class NotePopup extends Component {
  static contextType = DataContext;

  static defaultProps = {
    match: {
      params: {},
    },
    history: {},
  };

  render() {
    const { noteid } = this.props.match.params;
    const { notes } = this.context;

    const matchedNote = notes.find((note) => note.id === parseInt(noteid));

    const { content } = matchedNote ? matchedNote : "";
    return (
      <>
        <Note noteInfo={matchedNote} />
        <div className="noteContent">
          <p>{content}</p>
        </div>
      </>
    );
  }
}
