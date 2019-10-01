import React, { Component } from "react";
import ExampleContainer from "./ExampleContainer";
import { PictureInPictureMagnifier } from "../../src";
import PictureExampleControls from "./PictureExampleControls";

class PictureExample extends Component {
  state = {
    previewHorizontalPos: "left",
    previewVerticalPos: "bottom",
    previewSizePercentage: 35,
    previewOpacity: 1,
    shadow: false,
    show: true
  };

  handlePosChange = key => e => {
    const value = e.target.value;
    this.setState(() => ({ [key]: value, show: false }), this.show);
  };

  handleShadowChange = e => {
    const value = Boolean(e.target.value);
    this.setState(() => ({ shadow: value }));
  };

  handleSizeChange = e => {
    const value = Number(e.target.value);
    this.setState(
      () => ({ previewSizePercentage: value, show: false }),
      this.show
    );
  };

  handleOpacityChange = e => {
    const value = Number(e.target.value);
    this.setState(() => ({ previewOpacity: value }));
  };

  show = () => {
    this.setState(() => ({ show: true }));
  };

  render() {
    const {
      previewHorizontalPos,
      previewVerticalPos,
      previewSizePercentage,
      previewOpacity,
      shadow
    } = this.state;

    const { image, largeImage } = this.props;

    return (
      <React.Fragment>
        <ExampleContainer title="Picture In Picture Magnifier">
          <div className="flex">
            {this.state.show ? (
              <PictureInPictureMagnifier
                className="input-position"
                imageSrc={image}
                largeImageSrc={largeImage}
                previewHorizontalPos={previewHorizontalPos}
                previewVerticalPos={previewVerticalPos}
                previewSizePercentage={previewSizePercentage}
                previewOpacity={previewOpacity}
                shadow={shadow}
              />
            ) : null}
            <PictureExampleControls
              handlePosChange={this.handlePosChange}
              handleShadowChange={this.handleShadowChange}
              handleSizeChange={this.handleSizeChange}
              handleOpacityChange={this.handleOpacityChange}
            />
          </div>
        </ExampleContainer>
      </React.Fragment>
    );
  }
}

export default PictureExample;
