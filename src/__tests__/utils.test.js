import utils from "../utils";

describe("invertNumber", () => {
  it("inverts a number within a range", () => {
    expect(utils.invertNumber(0, 10, 7)).toBe(3);
  });

  it("inverts a negative number within a range", () => {
    expect(utils.invertNumber(-100, 0, -75)).toBe(-25);
  });
});

describe("convertRange", () => {
  it("converts number to equivalent in new range", () => {
    expect(utils.convertRange(0, 10, 100, 200, 5)).toBe(150);
    expect(utils.convertRange(0, 50, 50, 100, 5)).toBe(55);
  });
});

describe("convertWidthToPx", () => {
  it("converts percentage string to number of pixels", () => {
    expect(utils.convertWidthToPx("75%", 500)).toBe(375);
  });

  it("converts string px to number of pixels", () => {
    expect(utils.convertWidthToPx("75px")).toBe(75);
  });

  it("converts string number to number", () => {
    expect(utils.convertWidthToPx("75")).toBe(75);
  });

  it("returns number if called with a number", () => {
    expect(utils.convertWidthToPx(75)).toBe(75);
  });

  it("throws an error if width is not a number or string", () => {
    expect(utils.convertWidthToPx.bind(null, {})).toThrow();
  });
});

describe("convertWidthToString", () => {
  it("converts number to string with 'px' suffix", () => {
    expect(utils.convertWidthToString(75)).toBe("75px");
  });

  it("returns original string if given a string", () => {
    expect(utils.convertWidthToString("75px")).toBe("75px");
  });
});
