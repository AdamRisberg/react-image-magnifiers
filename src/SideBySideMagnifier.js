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
    onZoomEnd
  } = props;

  return (
    <ReactInputPosition
      style={style}
      className={className}
      touchActivationMethod={TOUCH_ACTIVATION.TOUCH}
      mouseActivationMethod={MOUSE_ACTIVATION.HOVER}
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
        alwaysInPlace={alwaysInPlace}
        transitionSpeed={transitionSpeed}
        transitionSpeedInPlace={transitionSpeedInPlace}
        renderOverlay={renderOverlay}
        cursorStyle={cursorStyle}
        onImageLoad={onImageLoad}
        onLargeImageLoad={onLargeImageLoad}
        switchSides={switchSides}
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
  cursorStyle: PropTypes.string,
  alwaysInPlace: PropTypes.bool,
  transitionSpeed: PropTypes.number,
  transitionSpeedInPlace: PropTypes.number,
  renderOverlay: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  onImageLoad: PropTypes.func,
  onLargeImageLoad: PropTypes.func
};

SideBySideMagnifier.defaultProps = {
  imageSrc: "",
  largeImageSrc: "",
  imageAlt: "",
  overlayOpacity: 0.5,
  overlayBoxOpacity: 0.8,
  cursorStyle: "crosshair",
  transitionSpeed: 0.4,
  transitionSpeedInPlace: 0.4,
  onImageLoad: utils.noop,
  onLargeImageLoad: utils.noop
};

export default SideBySideMagnifier;
