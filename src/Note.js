import React from "react";
import { Link } from "react-router-dom";

export default function Note(props) {
  console.log(props);
  return (
    <li className="Note">
      <h2>
        <Link to={`/note/${props.id}`}>{props.name}</Link>
      </h2>
      <p>{props.modified}</p>
    </li>
  );
}
