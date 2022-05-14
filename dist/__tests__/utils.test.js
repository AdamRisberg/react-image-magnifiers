"use strict";

var _utils = _interopRequireDefault(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("invertNumber", function () {
  it("inverts a number within a range", function () {
    expect(_utils["default"].invertNumber(0, 10, 7)).toBe(3);
  });
  it("inverts a negative number within a range", function () {
    expect(_utils["default"].invertNumber(-100, 0, -75)).toBe(-25);
  });
});
describe("convertRange", function () {
  it("converts number to equivalent in new range", function () {
    expect(_utils["default"].convertRange(0, 10, 100, 200, 5)).toBe(150);
    expect(_utils["default"].convertRange(0, 50, 50, 100, 5)).toBe(55);
  });
});
describe("convertWidthToPx", function () {
  it("converts percentage string to number of pixels", function () {
    expect(_utils["default"].convertWidthToPx("75%", 500)).toBe(375);
  });
  it("converts string px to number of pixels", function () {
    expect(_utils["default"].convertWidthToPx("75px")).toBe(75);
  });
  it("converts string number to number", function () {
    expect(_utils["default"].convertWidthToPx("75")).toBe(75);
  });
  it("returns number if called with a number", function () {
    expect(_utils["default"].convertWidthToPx(75)).toBe(75);
  });
  it("throws an error if width is not a number or string", function () {
    expect(_utils["default"].convertWidthToPx.bind(null, {})).toThrow();
  });
});
describe("convertWidthToString", function () {
  it("converts number to string with 'px' suffix", function () {
    expect(_utils["default"].convertWidthToString(75)).toBe("75px");
  });
  it("returns original string if given a string", function () {
    expect(_utils["default"].convertWidthToString("75px")).toBe("75px");
  });
});