import React, { Component } from "react";
import { Route, Link } from "react-router-dom";


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.note,
    };
  }
  render() {
    const { notes } = this.state;
    return (
      <div className="mainApp">

      </div>
    );
  }
}
