import React, { Component } from "react";
import DataContext from "./DataContext";

let foldersURL = "http://localhost:9090/folders";

export default class AddFolder extends Component {
  static contextType = DataContext;

  state = {
    folderName: "",
    error: null,
  };

  updateFolderName(e) {
    this.setState({
      folderName: { value: e },
    });
  }

  handleAddFolder(e) {
    e.preventDefault();

    let newFolderName = this.state.folderName;

    //Generate Random digit alphanumeric number;
    let newFolderId = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 20);

    const createFolder = {
      folder_id: newFolderId,
      folder_name: newFolderName,
    };

    fetch(foldersURL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createFolder),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then((data) => {
        this.props.history.push("/");
        this.context.addFolder(data);
      })
      .catch((err) => this.setState({ error: err.message }));
  }

  render() {
    return (
      <div id="folderForm">
        <form
          className="add-folder-form"
          onSubmit={(e) => this.handleAddFolder}
        >
          <label>Folder Name:</label>
          <input
            type="text"
            id="folder-name"
            name="folderName"
            onChange={(e) => this.updateFolderName(e.target.value)}
            required
          />

          <button
            type="submit"
            onClick={(e) => this.handleAddFolder(e.target.value)}
          >
            Add Folder &#43;
          </button>
        </form>
      </div>
    );
  }
}
