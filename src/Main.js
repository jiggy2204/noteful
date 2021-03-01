import React, { Component } from "react";
import { Route } from "react-router-dom";

import ListNotes from "./ListNotes";
import NotePopup from "./NotePopup";

import AddFolder from "./AddFolder";
import AddNote from "./AddNote";

export default class Main extends Component {
  render() {
    return (
      <section className="Main">
        <Route exact path="/">
          <ListNotes />
        </Route>
        <Route path="/notes/:noteid" component={NotePopup} />
        <Route path="/folder/:folderid" component={ListNotes} />
        <Route path="/add-folder" component={AddFolder} />
        <Route path="/add-note" component={AddNote} />
      </section>
    );
  }
}
