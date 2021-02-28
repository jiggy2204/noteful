import React, { Component } from "react";
import { Link } from "react-router-dom";

import DataContext from "./DataContext";

import Main from "./Main";
import Nav from "./Nav";

const apiKey = "i7fE6z5Fhz0mSuxyRM6UHGTesdZlgXwSqkphPxHV";
let foldersURL =
  "https://noteful-api-2e72e-default-rtdb.firebaseio.com/folders.json";
let notesURL =
  "https://noteful-api-2e72e-default-rtdb.firebaseio.com/notes.json";

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
        Authorization: apiKey,
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
        Authorization: apiKey,
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
            <Nav />
            <Main />
          </DataContext.Provider>
        </main>
      </div>
    );
  }
}
