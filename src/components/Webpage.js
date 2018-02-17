import React from "react";
import ReactDOM from "react-dom";
import FillerText from "./FillerText";

class Webpage extends React.Component {
  render() {
    return (
      <div>
        <h1>The worlds coolest webpage</h1>
        <FillerText />
        <FillerText />
      </div>
    );
  }
}

export default Webpage;
