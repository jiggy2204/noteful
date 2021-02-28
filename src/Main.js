import React from "react";
import { Route } from "react-router-dom";

import ListNotes from "./ListNotes";
import NotePopup from './NotePopup';

export default function Main(props) {
  return (
    <section className="Main">
      <Route exact path="/">
        <ListNotes />
      </Route>
      <Route path='/notes/:noteid' component={NotePopup} />
      <Route path="/folder/:folderid" component={ListNotes} />
    </section>
  );
}
