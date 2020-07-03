import React from "react";
import PropTypes from "prop-types";
import utils from "./utils";
import ReactInputPosition, {
  TOUCH_ACTIVATION,
  MOUSE_ACTIVATION
} from "react-input-position";
import SideBySideRenderer from "./SideBySideRenderer";

const SideBySideMagnifier = props => {
  const {
    imageSrc,
    largeImageSrc,
    imageAlt,
    overlayOpacity,
    overlayBoxOpacity,
    overlayBackgroundColor,
    overlayBoxColor,
    overlayBoxImage,
    overlayBoxImageSize,
    cursorStyle,
    alwaysInPlace,
    transitionSpeed,
    transitionSpeedInPlace,
    renderOverlay,
    className,
    style,
    onImageLoad,
    onLargeImageLoad,
    switchSides,
    onZoomStart,
    onZoomEnd,
    fillAvailableSpace,
    fillAlignTop,
    fillGapLeft,
    fillGapRight,
    fillGapTop,
    fillGapBottom,
    inPlaceMinBreakpoint,
    zoomContainerBorder,
    zoomContainerBoxShadow,
    mouseActivation,
    touchActivation
  } = props;

  return (
    <ReactInputPosition
      style={style}
      className={className}
      touchActivationMethod={touchActivation}
      mouseActivationMethod={mouseActivation}
      onActivate={onZoomStart}
      onDeactivate={onZoomEnd}
      trackItemPosition
      linkItemToActive
    >
      <SideBySideRenderer
        imageSrc={imageSrc}
        largeImageSrc={largeImageSrc}
        imageAlt={imageAlt}
        overlayOpacity={overlayOpacity}
        overlayBoxOpacity={overlayBoxOpacity}
        overlayBackgroundColor={overlayBackgroundColor}
        overlayBoxColor={overlayBoxColor}
        overlayBoxImage={overlayBoxImage}
        overlayBoxImageSize={overlayBoxImageSize}
        alwaysInPlace={alwaysInPlace}
        transitionSpeed={transitionSpeed}
        transitionSpeedInPlace={transitionSpeedInPlace}
        renderOverlay={renderOverlay}
        cursorStyle={cursorStyle}
        onImageLoad={onImageLoad}
        onLargeImageLoad={onLargeImageLoad}
        switchSides={switchSides}
        fillAvailableSpace={fillAvailableSpace}
        fillAlignTop={fillAlignTop}
        fillGapLeft={fillGapLeft}
        fillGapRight={fillGapRight}
        fillGapTop={fillGapTop}
        fillGapBottom={fillGapBottom}
        inPlaceMinBreakpoint={inPlaceMinBreakpoint}
        zoomContainerBorder={zoomContainerBorder}
        zoomContainerBoxShadow={zoomContainerBoxShadow}
      />
    </ReactInputPosition>
  );
};

SideBySideMagnifier.propTypes = {
  imageSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  largeImageSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  imageAlt: PropTypes.string,
  overlayOpacity: PropTypes.number,
  overlayBoxOpacity: PropTypes.number,
  overlayBackgroundColor: PropTypes.string,
  overlayBoxColor: PropTypes.string,
  overlayBoxImage: PropTypes.string,
  overlayBoxImageSize: PropTypes.string,
  cursorStyle: PropTypes.string,
  alwaysInPlace: PropTypes.bool,
  transitionSpeed: PropTypes.number,
  transitionSpeedInPlace: PropTypes.number,
  renderOverlay: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  onImageLoad: PropTypes.func,
  onLargeImageLoad: PropTypes.func,
  fillAvailableSpace: PropTypes.bool,
  fillAlignTop: PropTypes.bool,
  fillGapLeft: PropTypes.number,
  fillGapRight: PropTypes.number,
  fillGapTop: PropTypes.number,
  fillGapBottom: PropTypes.number,
  inPlaceMinBreakpoint: PropTypes.number,
  zoomContainerBorder: PropTypes.string,
  zoomContainerBoxShadow: PropTypes.string,
  mouseActivation: PropTypes.string,
  touchActivation: PropTypes.string
};

SideBySideMagnifier.defaultProps = {
  imageSrc: "",
  largeImageSrc: "",
  imageAlt: "",
  overlayOpacity: 0.5,
  overlayBoxOpacity: 0.8,
  overlayBackgroundColor: "#000",
  overlayBoxColor: "#fff",
  overlayBoxImage: "",
  overlayBoxImageSize: "",
  cursorStyle: "crosshair",
  transitionSpeed: 0.4,
  transitionSpeedInPlace: 0.4,
  onImageLoad: utils.noop,
  onLargeImageLoad: utils.noop,
  fillAvailableSpace: true,
  fillAlignTop: false,
  fillGapLeft: 0,
  fillGapRight: 0,
  fillGapTop: 0,
  fillGapBottom: 0,
  inPlaceMinBreakpoint: 0,
  zoomContainerBorder: "none",
  zoomContainerBoxShadow: "none",
  mouseActivation: MOUSE_ACTIVATION.HOVER,
  touchActivation: TOUCH_ACTIVATION.TOUCH
};

export default SideBySideMagnifier;
