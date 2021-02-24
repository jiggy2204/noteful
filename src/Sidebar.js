import React, { Component } from "react";
import { Route } from "react-router-dom";



export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folder: this.props.folder,
    };
  }
  render() {
    const { folder } = this.state;
    console.log(folder);
    return (
      <div className="SideBar">

      </div>
    );
  }
}
