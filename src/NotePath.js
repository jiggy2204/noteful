import React from "react";

import Note from "./Note";

export default function NotePath(props) {
  console.log(props.folders, props.notes);
  return (
    <section className="NotePath">
      <Note
        id={props.note.id}
        name={props.note.name}
        modified={props.note.modified}
      />
      <p>{props.note.content}</p>
    </section>
  );
}
