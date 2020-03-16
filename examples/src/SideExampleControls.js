import React from "react";

const SideExampleControls = props => {
  const { handleBoolChange, handleNumberChange, enableFillControls } = props;
  const labelStyle = { color: enableFillControls ? "#000" : "#999" };

  return (
    <div className="controls">
      <label style={{ marginBottom: "15px" }} className="label">
        In Place:
        <select onChange={handleBoolChange("alwaysInPlace")}>
          <option value="">false (auto)</option>
          <option value="true">true</option>
        </select>
        <div className="note">
          Uses In Place mode automatically if there isn't enough room to display
          side by side.
        </div>
      </label>
      <div className="label-flex">
        <label className="label-left">
          Fill Space:
          <select onChange={handleBoolChange("fillAvailableSpace")}>
            <option value="">false</option>
            <option value="true">true</option>
          </select>
        </label>
        <label style={labelStyle} className="label-right">
          Align Top:
          <select
            disabled={!enableFillControls}
            onChange={handleBoolChange("fillAlignTop")}
          >
            <option value="">false</option>
            <option value="true">true</option>
          </select>
        </label>
      </div>
      <div className="label-flex">
        <Select
          style={labelStyle}
          className="label-left"
          label="Gap Left:"
          onChange={handleNumberChange("fillGapLeft")}
          defaultValue="0"
          disabled={!enableFillControls}
        />
        <Select
          style={labelStyle}
          className="label-right"
          label="Gap Right:"
          onChange={handleNumberChange("fillGapRight")}
          defaultValue="10"
          disabled={!enableFillControls}
        />
      </div>
      <div className="label-flex">
        <Select
          style={labelStyle}
          className="label-left"
          label="Gap Top:"
          onChange={handleNumberChange("fillGapTop")}
          defaultValue="10"
          disabled={!enableFillControls}
        />
        <Select
          style={labelStyle}
          className="label-right"
          label="Gap Bottom:"
          onChange={handleNumberChange("fillGapBottom")}
          defaultValue="10"
          disabled={!enableFillControls}
        />
      </div>
    </div>
  );
};

function Select({ style, className, label, disabled, onChange, defaultValue }) {
  return (
    <label style={style} className={className}>
      {label}
      <select
        disabled={disabled}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        <option>0</option>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
      </select>
    </label>
  );
}

export default SideExampleControls;
