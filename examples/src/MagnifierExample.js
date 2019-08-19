import React, { Component } from "react";
import ExampleContainer from "./ExampleContainer";
import { Magnifier, MOUSE_ACTIVATION, TOUCH_ACTIVATION } from "../../src";
import MagnifierExampleControls from "./MagnifierExampleControls";

class MagnifierExample extends Component {
  state = {
    mouseActivation: MOUSE_ACTIVATION.CLICK,
    touchActivation: TOUCH_ACTIVATION.TAP,
    dragToMove: true
  };

  handleBoolChange = key => e => {
    const value = Boolean(e.target.value);
    this.setState(() => ({ [key]: value }));
  };

  handleActivationChange = key => e => {
    const value = e.target.value;
    this.setState(() => ({ [key]: value }));
  };

  render() {
    const { mouseActivation, touchActivation, dragToMove } = this.state;

    const { image } = this.props;

    return (
      <React.Fragment>
        <ExampleContainer title="Magnifier">
          <div className="flex">
            <Magnifier
              className="input-position"
              imageSrc={image}
              mouseActivation={mouseActivation}
              touchActivation={touchActivation}
              dragToMove={dragToMove}
            />
            <MagnifierExampleControls
              handleBoolChange={this.handleBoolChange}
              handleActivationChange={this.handleActivationChange}
            />
          </div>
        </ExampleContainer>
      </React.Fragment>
    );
  }
}

export default MagnifierExample;
