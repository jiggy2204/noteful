import React, { Component } from "react";
import Note from "./Note";

export default class NotesMainNav extends Component {
  static defaultProps = {
    notes: [],
  };
  render() {
    const { notes } = this.props;

    console.log(notes);
    return (
      <main className="Note__MainNav">
        <ul className="NoteList">
          {notes.map((note) => {
            <Note key={note.id} {...note} />;
          })}
        </ul>
      </main>
    );
  }
}
