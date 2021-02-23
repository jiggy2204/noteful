import React from "react";
import { Link } from "react-router-dom";

import NOTES from "./dummy-store";

export default function NoteListPage() {
  return (
    <>
      <ul className="NoteList">
        {NOTES.notes.map((note) => {
          <li key={note.id}>
            <Link to={`/note/${note.id}`}>{note.name}</Link>
          </li>;
        })}
      </ul>
    </>
  );
}
