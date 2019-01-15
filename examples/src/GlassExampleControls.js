import React from "react";

const GlassExampleControls = props => {
  const {
    handleSize,
    handleBorderSize,
    handleBoolChange,
    handleTextChange,
    borderColor
  } = props;

  return (
    <div className="controls">
      <div className="label-flex">
        <label className="label-left">
          Allow Overflow:
          <select defaultValue="true" onChange={handleBoolChange("allowOverflow")}>
            <option value="">false</option>
            <option value="true">true</option>
          </select>
        </label>
        <label className="label-right">
          Shape:
          <select onChange={handleBoolChange("square")}>
            <option value={""}>Circle</option>
            <option value="true">Square</option>
          </select>
        </label>
      </div>
      <div className="label-flex">
        <label className="label-left">
          Magnifier Size:
          <select defaultValue="30" onChange={handleSize}>
            <option value="15">15%</option>
            <option value="20">20%</option>
            <option value="25">25%</option>
            <option value="30">30%</option>
            <option value="35">35%</option>
            <option value="40">40%</option>
            <option value="45">45%</option>
            <option value="50">50%</option>
          </select>
        </label>
        <label className="label-right">
          Border Size:
          <select defaultValue="5" onChange={handleBorderSize}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </label>
      </div>
      <label className="label">
        Border Color: <span className="note">(Use valid CSS color)</span>
        <input type="text" value={borderColor} onChange={handleTextChange("magnifierBorderColor")} />
      </label>
    </div>
  );
};

export default GlassExampleControls;
