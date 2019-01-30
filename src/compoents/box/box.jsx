import React, { Component } from "react";
import "./Box.css";

class Tile extends Component {
  state = {
    showResults: false
  };
  constructor() {
    super();
  }
  componentDidMount() {
    //Ajax calll
    // setState
    console.log("App - Mounted");
  }
  expandData = () => {
    console.log(this.state.showResults);
    this.setState({ showResults: true });
  };
  collapsedata = () => {
    console.log(this.state.showResults);
    this.setState({ showResults: false });
  };
  render(props) {
    console.log("props", this.props);
    let url = "https://picsum.photos/200/" + this.props.data.id + "/?random";
    return (
      <div className="item">
        <p>{this.props.data}</p>
        <div className="clearBth" />
      </div>
    );
  }
}
export default Tile;
