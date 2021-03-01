import React, { Component } from "react";
import { Link } from "react-router-dom";

import DataContext from "./DataContext";

import Main from "./Main";
import Nav from "./Nav";
import NoteError from "./NoteError";

let foldersURL = "http://localhost:9090/folders";
let notesURL = "http://localhost:9090/notes";

export default class App extends Component {
  static contextType = DataContext;

  state = {
    folders: [],
    notes: [],
    error: null,
  };

  componentDidMount() {
    fetch(foldersURL, {
      method: "GET",
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
      .then((folderJson) => {
        this.setState({
          folders: folderJson,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });

    fetch(notesURL, {
      method: "GET",
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
      .then((notesJson) => {
        this.setState({
          notes: notesJson,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
    };
    return (
      <div className="mainPage">
        <header>
          <Link to="/">
            <h1>NOTEFUL</h1>
          </Link>
        </header>
        <main>
          <DataContext.Provider value={contextValue}>
            <NoteError>
              <Nav />
              <Main />
            </NoteError>
          </DataContext.Provider>
        </main>
      </div>
    );
  }
}
