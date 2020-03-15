import React, { Component } from "react";
import ExampleContainer from "./ExampleContainer";
import { SideBySideMagnifier } from "../../src";
import SideExampleControls from "./SideExampleControls";

class SideExample extends Component {
  state = {
    alwaysInPlace: false,
    overlayOpacity: 0.6,
    switchSides: false
  };

  handleBoolChange = key => e => {
    const value = Boolean(e.target.value);
    this.setState(() => ({ [key]: value }));
  };

  handleOpacityChange = e => {
    const value = Number(e.target.value);
    this.setState(() => ({ overlayOpacity: value }));
  };

  render() {
    const { alwaysInPlace, overlayOpacity, switchSides } = this.state;

    const { image, largeImage } = this.props;

    return (
      <React.Fragment>
        <ExampleContainer title="Side By Side Magnifier">
          <div className="flex">
            <SideBySideMagnifier
              className="input-position"
              style={{ order: switchSides ? "1" : "0" }}
              imageSrc={image}
              largeImageSrc={largeImage}
              alwaysInPlace={alwaysInPlace}
              overlayOpacity={overlayOpacity}
              switchSides={switchSides}
              zoomPosition="left"
            />
            <SideExampleControls
              handleBoolChange={this.handleBoolChange}
              handleOpacityChange={this.handleOpacityChange}
            />
          </div>
        </ExampleContainer>
      </React.Fragment>
    );
  }
}

export default SideExample;