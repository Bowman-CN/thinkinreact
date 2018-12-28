import React, { Component } from "react";
import { Progress } from "reactstrap";

class Loading extends Component {
  render() {
    return (
      <div>
        <Progress bar animated color="info" value="100">
          Loading ...
        </Progress>
      </div>
    );
  }
}

export default Loading;
