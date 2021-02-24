import React from "react";
import { Link } from "react-router-dom";

export default function FolderLink(props) {
  console.log(props);
  return (
    <ul>
      {props.folders.map((f) => {
        <li key={f.id}>
          <Link to={f.id}>{f.name}</Link>
        </li>;
      })}
    </ul>
  );
}
