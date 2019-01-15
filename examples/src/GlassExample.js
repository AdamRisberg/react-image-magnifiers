import React, { Component } from "react";
import ExampleContainer from "./ExampleContainer";
import { GlassMagnifier } from "../../src";
import GlassExampleControls from "./GlassExampleControls";

class GlassExample extends Component {
  state = {
    allowOverflow: true,
    magnifierBorderSize: 5,
    magnifierBorderColor: "rgba(255, 255, 255, .5)",
    magnifierSize: "30%",
    square: false
  }

  handleSize = (e) => {
    const value = e.target.value + "%";
    this.setState(() => ({ magnifierSize: value }));
  };

  handleBorderSize = (e) => {
    const value = Number(e.target.value);
    this.setState(() => ({ magnifierBorderSize: value }));
  };

  handleBoolChange = (key) => (e) => {
    const value = Boolean(e.target.value);
    this.setState(() => ({ [key]: value }));
  };

  handleTextChange = (key) => (e) => {
    const value = e.target.value;
    this.setState(() => ({ [key]: value }));
  };

  render() {
    const {
      allowOverflow,
      magnifierSize,
      magnifierBorderSize,
      magnifierBorderColor,
      square
    } = this.state;

    const { image } = this.props;

    return (
      <React.Fragment>
        <ExampleContainer title="Glass Magnifier">
          <div className="flex">
            <GlassMagnifier
              className="input-position"
              imageSrc={image}
              allowOverflow={allowOverflow}
              magnifierSize={magnifierSize}
              magnifierBorderSize={magnifierBorderSize}
              magnifierBorderColor={magnifierBorderColor}
              square={square}
            />
            <GlassExampleControls
              handleSize={this.handleSize}
              handleBorderSize={this.handleBorderSize}
              handleBoolChange={this.handleBoolChange}
              handleTextChange={this.handleTextChange}
              borderColor={this.state.magnifierBorderColor}
            />
          </div>
        </ExampleContainer>
      </React.Fragment>
    );
  }
}

export default GlassExample;