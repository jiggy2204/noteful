import React, { Component } from "react";
import DataContext from "./DataContext";

let notesURL = "http://localhost:9090/notes";

export default class AddNote extends Component {
  static contextType = DataContext;

  state = {
    error: null,
  };

  handleAddNote(e) {
    e.preventDefault();

    let newNoteName = e.target.noteName.value;

    //Generate Random digit alphanumeric number;
    let newNoteId = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 20);

    const createNote = {
      note_id: newNoteId,
      note_name: newNoteName,
    };

    fetch(notesURL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createNote),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then((data) => {
        this.props.history.push("/");
        this.context.addFolder(data);
      })
      .catch((err) => this.setState({ error: err.message }));
  }

  render() {
    return (
      <div id="noteForm">
        <form className="add-note-form" onSubmit={(e) => this.handleAddNote}>
          <label>Note Name:</label>
          <input type="text" id="note-name" name="noteName" required />

          <button type="submit">Add Note &#43;</button>
        </form>
      </div>
    );
  }
}
