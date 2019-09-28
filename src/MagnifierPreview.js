import React from "react";
import PropTypes from "prop-types";
import ReactInputPosition, {
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-input-position";
import MagnifierPreviewRenderer from "./MagnifierPreviewRenderer";

function MagnifierPreview(props) {
  const {
    imageSrc,
    imageAlt,
    className,
    style,
    stateOverride,
    onUpdate,
    zoomImageDimensions,
    previewSize,
    smallImageSize,
    cursorStyle,
    onImageLoad,
    renderOverlay,
    overlayOpacity,
    overlayBoxOpacity,
    transitionSpeed
  } = props;

  return (
    <ReactInputPosition
      mouseActivationMethod={MOUSE_ACTIVATION.HOVER}
      touchActivationMethod={TOUCH_ACTIVATION.TOUCH}
      className={className}
      style={style}
      cursorStyle={cursorStyle}
      trackItemPosition
      linkItemToActive
      stateOverride={stateOverride}
      onUpdate={onUpdate}
    >
      <MagnifierPreviewRenderer
        image={imageSrc}
        alt={imageAlt}
        zoomImageDimensions={zoomImageDimensions}
        previewSize={previewSize}
        smallImageSize={smallImageSize}
        onImageLoad={onImageLoad}
        renderOverlay={renderOverlay}
        overlayOpacity={overlayOpacity}
        overlayBoxOpacity={overlayBoxOpacity}
        transitionSpeed={transitionSpeed}
      />
    </ReactInputPosition>
  );
}

MagnifierPreview.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  cursorStyle: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  onImageLoad: PropTypes.func,
  renderOverlay: PropTypes.func,
  overlayBoxOpacity: PropTypes.number,
  overlayOpacity: PropTypes.number,
  transitionSpeed: PropTypes.number
};

MagnifierPreview.defaultProps = {
  cursorStyle: "crosshair",
  imageSrc: "",
  imageAlt: "",
  onImageLoad: () => {}
};

export default MagnifierPreview;
