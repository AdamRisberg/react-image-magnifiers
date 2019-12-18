function getLargeImageStyle(positionX, positionY, active) {
  return {
    position: "absolute",
    boxSizing: "border-box",
    display: "block",
    top: 0,
    left: 0,
    transform: `translate(${positionX}px, ${positionY}px)`,
    zIndex: "1",
    visibility: !active ? "hidden" : "visible",
    width: "auto"
  };
}

function getZoomContainerStyle(width, height, inPlace) {
  return {
    position: "absolute",
    boxSizing: "border-box",
    pointerEvents: "none",
    width: `${width}px`,
    height: `${height}px`,
    right: `${inPlace ? 0 : width}px`,
    top: "0",
    overflow: "hidden"
  };
}

function getOverlayCenterStyle(
  width,
  height,
  left,
  top,
  opacity,
  transitionSpeed
) {
  return {
    position: "absolute",
    width: `${width}px`,
    height: `${height}px`,
    left: 0,
    top: 0,
    boxSizing: "border-box",
    transform: `translate(${left}px, ${top}px)`,
    border: `1px solid white`,
    opacity: opacity,
    transition: `opacity ${transitionSpeed}s ease`,
    zIndex: "15",
    pointerEvents: "none"
  };
}

function getOverlayTopStyle(width, height, opacity, transitionSpeed) {
  return {
    backgroundColor: "#000",
    position: "absolute",
    boxSizing: "border-box",
    top: 0,
    left: 0,
    width: `${width}px`,
    height: `${height}px`,
    zIndex: "10",
    transition: `opacity ${transitionSpeed}s ease`,
    opacity: opacity,
    transform: "scale3d(1,1,1)",
    pointerEvents: "none"
  };
}

function getOverlayLeftStyle(width, height, top, opacity, transitionSpeed) {
  return {
    backgroundColor: "#000",
    position: "absolute",
    boxSizing: "border-box",
    width: `${width}px`,
    top: `${top}px`,
    left: 0,
    height: `${height}px`,
    zIndex: "10",
    transition: `opacity ${transitionSpeed}s ease`,
    opacity: opacity,
    transform: "scale3d(1,1,1)",
    pointerEvents: "none"
  };
}

function getOverlayRightStyle(width, height, top, opacity, transitionSpeed) {
  return {
    backgroundColor: "#000",
    position: "absolute",
    boxSizing: "border-box",
    top: `${top}px`,
    right: 0,
    width: `${width}px`,
    height: `${height}px`,
    zIndex: "10",
    transition: `opacity ${transitionSpeed}s ease`,
    opacity: opacity,
    transform: "scale3d(1,1,1)",
    pointerEvents: "none"
  };
}

function getOverlayBottomStyle(width, height, top, opacity, transitionSpeed) {
  return {
    backgroundColor: "#000",
    position: "absolute",
    boxSizing: "border-box",
    top: `${top}px`,
    width: `${width}px`,
    height: `${height}px`,
    zIndex: "10",
    transition: `opacity ${transitionSpeed}s ease`,
    opacity: opacity,
    transform: "scale3d(1,1,1)",
    pointerEvents: "none"
  };
}

function getMagnifierZoomStyle(active, transitionSpeed) {
  return {
    position: "relative",
    opacity: active ? 1 : 0,
    transition: `opacity ${transitionSpeed}s ease`
  };
}

export default {
  getLargeImageStyle,
  getZoomContainerStyle,
  getOverlayCenterStyle,
  getOverlayTopStyle,
  getOverlayLeftStyle,
  getOverlayRightStyle,
  getOverlayBottomStyle,
  getMagnifierZoomStyle
};
