import React, { Component } from "react";
import "./Box.css";
import Box from "./box";
import LeftIcon from "../leftIcon/LeftIcon";
import RightIcon from "../rightIcon/RightIcon";

class MaintileWrapper extends Component {
  state = {
    posts: []
  };
  constructor() {
    super();
  }
  componentDidMount() {
    let res = [1, 2, 3, 4, 5, 6, 8, 9];
    this.setState({ posts: res });
  }
  render() {
    const { posts } = this.state;
    // console.log("posts", posts);
    return (
      <React.Fragment>
        <LeftIcon />
        <div className="flexbox">
          {posts.map((item, key) => {
            console.log(item);
            return <Box data={item} key={key} />;
          })}
        </div>
        <RightIcon />
      </React.Fragment>
    );
  }
}
export default MaintileWrapper;
