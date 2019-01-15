import React from "react";
import ReactDOM from "react-dom";

import GlassExample from "./GlassExample";
import MagnifierExample from "./MagnifierExample";
import PictureExample from "./PictureExample";
import SideExample from "./SideExample";
import Header from "./Header";

import "./style.css";

const image = require("./sample-image.jpg");

const DemoApp = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="app">
        <MagnifierExample image={image} />
        <GlassExample image={image} />
        <PictureExample image={image} />
        <SideExample image={image} />
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<DemoApp />, document.getElementById("root"));