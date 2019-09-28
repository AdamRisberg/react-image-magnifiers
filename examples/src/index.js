import React from "react";
import ReactDOM from "react-dom";

// import GlassExample from "./GlassExample";
// import MagnifierExample from "./MagnifierExample";
// import PictureExample from "./PictureExample";
// import SideExample from "./SideExample";
// import Header from "./Header";

import MagnifierContainer from "../../src/MagnifierContainer";
import MagnifierZoom from "../../src/MagnifierZoom";
import MagnifierPreview from "../../src/MagnifierPreview";

import "./style.css";

// const image = require("./sample-image.jpg");

const DemoApp = () => {
  return (
    <React.Fragment>
      {/* <Header />
      <div className="app">
        <MagnifierExample image={image} />
        <GlassExample image={image} />
        <PictureExample image={image} />
        <SideExample image={image} />
      </div> */}
      <MagnifierContainer
        style={{
          display: "flex",
          alignItems: "flex-start",
          paddingBottom: "10px"
        }}
      >
        <MagnifierPreview
          style={{ width: "300px", marginRight: "20px" }}
          imageSrc={
            "http://www.latestseotutorial.com/wp-content/uploads/2018/10/sadop-images-57.jpg"
          }
          imageAlt="preview image"
        />
        {/* <div> */}
        <MagnifierZoom
          style={{
            // width: "100%",
            width: "300px",
            height: "300px",
            // height: "450px",
            boxShadow: "0 2px 8px rgba(0,0,0,.5)"
          }}
          imageSrc={
            "http://www.latestseotutorial.com/wp-content/uploads/2018/10/sadop-images-57.jpg"
          }
          imageAlt="zoom image"
        />
        {/* </div> */}
      </MagnifierContainer>
    </React.Fragment>
  );
};

ReactDOM.render(<DemoApp />, document.getElementById("root"));
