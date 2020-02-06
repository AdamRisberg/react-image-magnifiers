import React from "react";
import PropTypes from "prop-types";
import utils from "./utils";
import ReactInputPosition, {
  TOUCH_ACTIVATION,
  MOUSE_ACTIVATION
} from "react-input-position";
import GlassRenderer from "./GlassRenderer";

const GlassMagnifier = props => {
  const {
    imageSrc,
    largeImageSrc,
    imageAlt,
    magnifierBorderSize,
    magnifierBorderColor,
    magnifierBackgroundColor,
    magnifierSize,
    magnifierOffsetX,
    magnifierOffsetY,
    square,
    cursorStyle,
    renderOverlay,
    allowOverflow,
    style,
    className,
    onImageLoad,
    onLargeImageLoad,
    onZoomStart,
    onZoomEnd
  } = props;

  return (
    <ReactInputPosition
      style={{
        ...style,
        position: "relative",
        overflow: allowOverflow ? "visible" : "hidden"
      }}
      className={className}
      touchActivationMethod={TOUCH_ACTIVATION.TOUCH}
      mouseActivationMethod={MOUSE_ACTIVATION.HOVER}
      onActivate={onZoomStart}
      onDeactivate={onZoomEnd}
      trackItemPosition
      alignItemOnActivePos
      itemPositionLimitBySize
    >
      <GlassRenderer
        magnifierBorderSize={magnifierBorderSize}
        magnifierBorderColor={magnifierBorderColor}
        magnifierBackgroundColor={magnifierBackgroundColor}
        magnifierSize={magnifierSize}
        imageSrc={imageSrc}
        largeImageSrc={largeImageSrc}
        imageAlt={imageAlt}
        square={square}
        magnifierOffsetX={magnifierOffsetX}
        magnifierOffsetY={magnifierOffsetY}
        renderOverlay={renderOverlay}
        cursorStyle={cursorStyle}
        onImageLoad={onImageLoad}
        onLargeImageLoad={onLargeImageLoad}
      />
    </ReactInputPosition>
  );
};

GlassMagnifier.propTypes = {
  imageSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  largeImageSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  imageAlt: PropTypes.string,
  allowOverflow: PropTypes.bool,
  magnifierBorderSize: PropTypes.number,
  magnifierBorderColor: PropTypes.string,
  magnifierBackgroundColor: PropTypes.string,
  magnifierSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  magnifierOffsetX: PropTypes.number,
  magnifierOffsetY: PropTypes.number,
  square: PropTypes.bool,
  cursorStyle: PropTypes.string,
  renderOverlay: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  onImageLoad: PropTypes.func,
  onLargeImageLoad: PropTypes.func
};

GlassMagnifier.defaultProps = {
  imageSrc: "",
  largeImageSrc: "",
  imageAlt: "",
  allowOverflow: false,
  magnifierBorderSize: 3,
  magnifierBorderColor: "rgba(255,255,255,.5)",
  magnifierBackgroundColor: "rgba(225,225,225,.5)",
  magnifierSize: "25%",
  magnifierOffsetX: 0,
  magnifierOffsetY: 0,
  square: false,
  cursorStyle: "none",
  onImageLoad: utils.noop,
  onLargeImageLoad: utils.noop
};

export default GlassMagnifier;
