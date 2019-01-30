import React, { Component } from "react";
import "./leftIcon.css";

class LeftIcon extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="leftIcon">
        <button type="button">Refresh</button>
      </div>
    );
  }
}
export default LeftIcon;
