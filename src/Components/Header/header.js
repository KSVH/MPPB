import React, { Component } from "react";
import Navbar from "./Navbar/navbar";

export class header extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <p>Header</p>
      </div>
    );
  }
}

export default header;
