import React, { Component } from "react";
import ExampleContainer from "./ExampleContainer";
import { SideBySideMagnifier } from "../../src";
import SideExampleControls from "./SideExampleControls";

class SideExample extends Component {
  state = {
    alwaysInPlace: false,
    overlayOpacity: 0.6,
    switchSides: false,
    fillAvailableSpace: false,
    fillAlignTop: false,
    fillGapLeft: 0,
    fillGapRight: 10,
    fillGapTop: 10,
    fillGapBottom: 10
  };

  handleBoolChange = key => e => {
    const value = Boolean(e.target.value);
    this.setState(() => ({ [key]: value }));
  };

  handleNumberChange = key => e => {
    const value = Number(e.target.value);
    this.setState(() => ({ [key]: value }));
  };

  render() {
    const {
      alwaysInPlace,
      overlayOpacity,
      switchSides,
      fillAvailableSpace,
      fillAlignTop,
      fillGapLeft,
      fillGapRight,
      fillGapTop,
      fillGapBottom
    } = this.state;

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
              inPlaceMinBreakpoint={641}
              fillAvailableSpace={fillAvailableSpace}
              fillAlignTop={fillAlignTop}
              fillGapTop={fillGapTop}
              fillGapRight={fillGapRight}
              fillGapBottom={fillGapBottom}
              fillGapLeft={fillGapLeft}
              zoomContainerBorder="1px solid #ccc"
              zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
            />
            <SideExampleControls
              handleBoolChange={this.handleBoolChange}
              handleNumberChange={this.handleNumberChange}
              enableFillControls={fillAvailableSpace}
            />
          </div>
        </ExampleContainer>
      </React.Fragment>
    );
  }
}

export default SideExample;
