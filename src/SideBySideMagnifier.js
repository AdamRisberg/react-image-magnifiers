import React from "react";
import PropTypes from "prop-types";
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
    onSmallImageLoad,
    onLargeImageLoad
  } = props;

  return (
    <ReactInputPosition
      style={style}
      className={className}
      touchActivationMethod={TOUCH_ACTIVATION.TOUCH}
      mouseActivationMethod={MOUSE_ACTIVATION.HOVER}
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
        onSmallImageLoad={onSmallImageLoad}
        onLargeImageLoad={onLargeImageLoad}
      />
    </ReactInputPosition>
  );
};

SideBySideMagnifier.propTypes = {
  imageSrc: PropTypes.string,
  largeImageSrc: PropTypes.string,
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
  onSmallImageLoad:PropTypes.func,
  onLargeImageLoad:PropTypes.func
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
  onSmallImageLoad:() => {},
  onLargeImageLoad:() => {}
};

export default SideBySideMagnifier;
