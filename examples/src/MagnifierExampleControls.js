import React from "react";
import {
  TOUCH_ACTIVATION,
  MOUSE_ACTIVATION
} from "react-input-position";

const MagnifierExampleControls = props => {
  const {
    handleBoolChange,
    handleActivationChange
  } = props;

  return (
    <div className="controls">
      <label className="label">
        Mouse Zoom In/Out Method:
        <select onChange={handleActivationChange("mouseActivation")}>
          <option value={MOUSE_ACTIVATION.CLICK}>Single Click</option>
          <option value={MOUSE_ACTIVATION.DOUBLE_CLICK}>Double Click</option>
        </select>
      </label>
      <label className="label">
        Touch Zoom In/Out Method:
        <select onChange={handleActivationChange("touchActivation")}>
          <option value={TOUCH_ACTIVATION.TAP}>Single Tap</option>
          <option value={TOUCH_ACTIVATION.DOUBLE_TAP}>Double Tap</option>
          <option value={TOUCH_ACTIVATION.LONG_TOUCH}>Long Touch</option>
        </select>
      </label>
      <label className="label">
        Movement Method:
        <select defaultValue="true" onChange={handleBoolChange("dragToMove")}>
          <option value={""}>Hover/Slide</option>
          <option value="true">Click/Touch Drag</option>
        </select>
      </label>
    </div>
  );
};

export default MagnifierExampleControls;