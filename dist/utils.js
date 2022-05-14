"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function invertNumber(min, max, num) {
  return max + min - num;
}

function convertRange(oldMin, oldMax, newMin, newMax, oldValue) {
  var percent = (oldValue - oldMin) / (oldMax - oldMin);
  var result = percent * (newMax - newMin) + newMin;
  return result || 0;
}

function convertWidthToPx(width, containerWidth) {
  if (typeof width === "number") {
    return width;
  }

  if (typeof width !== "string") {
    throw new Error("Received: ".concat(width, " - Size must be a number or string"));
  }

  if (width.substr(-1) === "%") {
    var percent = 100 / Number(width.slice(0, -1));
    return containerWidth / percent;
  }

  if (width.substr(-2) === "px") {
    return Number(width.slice(0, -2));
  }

  return Number(width);
}

function convertWidthToString(width) {
  if (typeof width === "number") {
    return width + "px";
  }

  return width;
}

function noop() {}

var _default = {
  invertNumber: invertNumber,
  convertRange: convertRange,
  convertWidthToPx: convertWidthToPx,
  convertWidthToString: convertWidthToString,
  noop: noop
};
exports["default"] = _default;