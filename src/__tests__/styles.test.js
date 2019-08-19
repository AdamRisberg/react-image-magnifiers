import styles from "../styles";

describe("getLargeImageStyle", () => {
  it("returns correct transform property", () => {
    const style = styles.getLargeImageStyle(10, 15);
    expect(style.transform).toBe("translate(10px, 15px)");
  });

  it("returns correct visibility property when active is true", () => {
    const style = styles.getLargeImageStyle(10, 15, true);
    expect(style.visibility).toBe("visible");
  });

  it("returns correct visibility property when active is false", () => {
    const style = styles.getLargeImageStyle(10, 15, false);
    expect(style.visibility).toBe("hidden");
  });
});

describe("getZoomContainerStyle", () => {
  it("returns correct width & height properties", () => {
    const style = styles.getZoomContainerStyle(400, 500);
    expect(style.width).toBe("400px");
    expect(style.height).toBe("500px");
  });

  it("returns correct left property when inPlace is true", () => {
    const style = styles.getZoomContainerStyle(400, 500, true);
    expect(style.left).toBe("0px");
  });

  it("returns correct left property when inPlace is true", () => {
    const style = styles.getZoomContainerStyle(400, 500, false);
    expect(style.left).toBe("400px");
  });
});

describe("getOverlayCenterStyle", () => {
  const style = styles.getOverlayCenterStyle(400, 500, 20, 30, 0.8, 0.3);

  it("returns correct width & height properties", () => {
    expect(style.width).toBe("400px");
    expect(style.height).toBe("500px");
  });

  it("returns correct transform property", () => {
    expect(style.transform).toBe("translate(20px, 30px)");
  });

  it("returns correct opacity property", () => {
    expect(style.opacity).toBe(0.8);
  });

  it("returns correct transition property", () => {
    expect(style.transition).toBe("opacity 0.3s ease");
  });
});

describe("getOverlayTopStyle", () => {
  const style = styles.getOverlayTopStyle(400, 500, 0.8, 0.3);

  it("returns correct width & height properties", () => {
    expect(style.width).toBe("400px");
    expect(style.height).toBe("500px");
  });

  it("returns correct opacity property", () => {
    expect(style.opacity).toBe(0.8);
  });

  it("returns correct transition property", () => {
    expect(style.transition).toBe("opacity 0.3s ease");
  });
});

describe("getOverlayLeftStyle", () => {
  const style = styles.getOverlayLeftStyle(400, 500, 10, 0.8, 0.3);
  runOverlayTests(style);
});

describe("getOverlayRightStyle", () => {
  const style = styles.getOverlayRightStyle(400, 500, 10, 0.8, 0.3);
  runOverlayTests(style);
});

describe("getOverlayBottomStyle", () => {
  const style = styles.getOverlayBottomStyle(400, 500, 10, 0.8, 0.3);
  runOverlayTests(style);
});

function runOverlayTests(style) {
  it("returns correct width & height properties", () => {
    expect(style.width).toBe("400px");
    expect(style.height).toBe("500px");
  });

  it("returns correct top property", () => {
    expect(style.top).toBe("10px");
  });

  it("returns correct opacity property", () => {
    expect(style.opacity).toBe(0.8);
  });

  it("returns correct transition property", () => {
    expect(style.transition).toBe("opacity 0.3s ease");
  });
}
