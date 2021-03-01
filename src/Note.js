import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import PropTypes from "prop-types";

import DataContext from "./DataContext";

let notesURL = "http://localhost:9090/notes";

class Note extends Component {
  static defaultProps = {
    onDeleteNote: () => {},
    noteInfo: {},
  };

  static contextType = DataContext;

  handleDeleteClicked(e) {
    e.preventDefault();

    const noteId = this.props.noteInfo.id;

    fetch(notesURL + "/ " + noteId, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then(() => {
        this.context.deleteNote(noteId);
        this.props.onDeleteNote(noteId);
      })
      .catch((err) => err.message);
  }

  render() {
    const { name, modified, id } = this.props.noteInfo;

    return (
      <div className="Note">
        <Link to={`/notes/${id}`}>
          <h2>{name}</h2>
        </Link>
        <p>
          Date Modified: {moment(modified).format("Do MMM YYYY")}
          <button onClick={(e) => this.handleDeleteClicked(e)}>
            &#8722; DELETE NOTE
          </button>
        </p>
      </div>
    );
  }
}

Note.propTypes = {
  noteInfo: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    modified: PropTypes.string,
    folderId: PropTypes.string,
    content: PropTypes.string,
  }),
  onDeleteNote: PropTypes.func.isRequired,
};

export default Note;
