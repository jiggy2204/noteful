import React from "react";

import Note from "./Note";

export default function NotePage(props) {
  return (
    <section>
      <Note
        id={props.note.id}
        name={props.note.name}
        modified={props.note.modified}
      />
      <p>{props.note.content}</p>
    </section>
  );
}
