import React from "react";

const PictureExampleControls = props => {
  const {
    handlePosChange,
    handleShadowChange,
    handleSizeChange,
    handleOpacityChange
  } = props;

  return (
    <div className="controls">
      <div className="label-flex">
        <label className="label-left">
          Horizontal Align:
          <select onChange={handlePosChange("previewHorizontalPos")}>
            <option>left</option>
            <option>right</option>
          </select>
        </label>
        <label className="label-right">
          Vertical Align:
          <select onChange={handlePosChange("previewVerticalPos")}>
            <option>bottom</option>
            <option>top</option>
          </select>
        </label>
      </div>
      <div className="label-flex">
        <label className="label-left">
          Preview Size (%):
          <select defaultValue="35" onChange={handleSizeChange}>
            <option>25</option>
            <option>30</option>
            <option>35</option>
            <option>40</option>
            <option>45</option>
            <option>50</option>
          </select>
        </label>
        <label className="label-right">
          Preview Shadow:
          <select onChange={handleShadowChange}>
            <option value="">false</option>
            <option value="true">true</option>
          </select>
        </label>
      </div>
      <label className="label">
        Preview Opacity:
        <select defaultValue="1" onChange={handleOpacityChange}>
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

export default PictureExampleControls;