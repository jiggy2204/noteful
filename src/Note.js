import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import PropTypes from "prop-types";

import DataContext from "./DataContext";

Note.propTypes = {
  noteInfo: PropTypes.shape({
    id: PropTypes.number,
    note_name: PropTypes.string,
    date_modified: PropTypes.string,
    folder_id: PropTypes.number,
    content: PropTypes.string,
  }),
};

class Note extends Component {
  static contextType = DataContext;

  render() {
    const { note_name, date_modified, id } = this.props.noteInfo;

    console.log(noteInfo.toString());
    return (
      <div className="Note">
        <Link to={`/notes/${id}`}>
          <h2>{note_name}</h2>
        </Link>
        <p>
          Date Modified: {moment(date_modified).format("Do MMM YYYY")}
          <button onClick={(e) => this.handleDeleteClicked(e)}>
            DELETE NOTE
          </button>
        </p>
      </div>
    );
  }
}

export default Note;
