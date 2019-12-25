import React from "react";

const SideExampleControls = props => {
  const { handleBoolChange, handleOpacityChange } = props;

  return (
    <div className="controls">
      <label className="label">
        In Place:
        <select onChange={handleBoolChange("alwaysInPlace")}>
          <option value="">false</option>
          <option value="true">true</option>
        </select>
        <div className="note">
          Uses In Place mode automatically if there isn't enough room to display
          side by side.
        </div>
      </label>
      <label className="label">
        Switch Sides:
        <select onChange={handleBoolChange("switchSides")}>
          <option value="">false</option>
          <option value="true">true</option>
        </select>
      </label>
      <label className="label">
        Overlay Opacity:
        <select defaultValue=".6" onChange={handleOpacityChange}>
          <option>0</option>
          <option>.1</option>
          <option>.2</option>
          <option>.3</option>
          <option>.4</option>
          <option>.5</option>
          <option>.6</option>
          <option>.7</option>
          <option>.8</option>
          <option>.9</option>
          <option>1</option>
        </select>
      </label>
    </div>
  );
};

export default SideExampleControls;
