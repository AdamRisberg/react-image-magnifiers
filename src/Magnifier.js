import React from "react";
import PropTypes from "prop-types";
import utils from "./utils";
import ReactInputPosition, {
  TOUCH_ACTIVATION,
  MOUSE_ACTIVATION
} from "react-input-position";
import MagnifierRenderer from "./MagnifierRenderer";

const Magnifier = props => {
  const {
    imageSrc,
    largeImageSrc,
    imageAlt,
    cursorStyle,
    cursorStyleActive,
    renderOverlay,
    dragToMove,
    className,
    style,
    mouseActivation,
    touchActivation,
    interactionSettings,
    onImageLoad,
    onLargeImageLoad,
    onImageError,
    onLargeImageError,
    onZoomStart,
    onZoomEnd
  } = props;

  const finalActiveCursorStyle =
    cursorStyleActive || dragToMove ? "move" : "zoom-out";

  return (
    <ReactInputPosition
      style={style}
      className={className}
      touchActivationMethod={touchActivation}
      mouseActivationMethod={mouseActivation}
      trackItemPosition
      centerItemOnActivatePos={dragToMove}
      alignItemOnActivePos={!dragToMove}
      onActivate={onZoomStart}
      onDeactivate={onZoomEnd}
      itemPositionLimitBySize
      {...interactionSettings}
    >
      <MagnifierRenderer
        imageSrc={imageSrc}
        largeImageSrc={largeImageSrc}
        imageAlt={imageAlt}
        renderOverlay={renderOverlay}
        cursorStyle={cursorStyle}
        cursorStyleActive={finalActiveCursorStyle}
        onImageLoad={onImageLoad}
        onLargeImageLoad={onLargeImageLoad}
        onImageError={onImageError}
        onLargeImageError={onLargeImageError}
      />
    </ReactInputPosition>
  );
};

Magnifier.propTypes = {
  imageSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  largeImageSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  imageAlt: PropTypes.string,
  cursorStyle: PropTypes.string,
  cursorStyleActive: PropTypes.string,
  renderOverlay: PropTypes.func,
  dragToMove: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  mouseActivation: PropTypes.string,
  touchActivation: PropTypes.string,
  interactionSettings: PropTypes.shape({
    tapDurationInMs: PropTypes.number,
    doubleTapDurationInMs: PropTypes.number,
    longTouchDurationInMs: PropTypes.number,
    longTouchMoveLimit: PropTypes.number,
    clickMoveLimit: PropTypes.number
  }),
  onImageLoad: PropTypes.func,
  onLargeImageLoad: PropTypes.func
};

Magnifier.defaultProps = {
  imageSrc: "",
  largeImageSrc: "",
  imageAlt: "",
  cursorStyle: "zoom-in",
  cursorStyleActive: "",
  dragToMove: true,
  mouseActivation: MOUSE_ACTIVATION.CLICK,
  touchActivation: TOUCH_ACTIVATION.TAP,
  interactionSettings: {},
  onImageLoad: utils.noop,
  onLargeImageLoad: utils.noop
};

export default Magnifier;
