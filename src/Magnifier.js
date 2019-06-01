import React from "react";
import PropTypes from "prop-types";
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
    interactionSettings
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
      />
    </ReactInputPosition>
  );
};

Magnifier.propTypes = {
  imageSrc: PropTypes.string,
  largeImageSrc: PropTypes.string,
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
  })
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
  interactionSettings: {}
};

export default Magnifier;
