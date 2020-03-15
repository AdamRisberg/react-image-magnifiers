import React from "react";
import PropTypes from "prop-types";
import utils from "./utils";
import ReactInputPosition, {
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-input-position";
import MagnifierPreviewRenderer from "./MagnifierPreviewRenderer";
import { MagnifierContext } from "./MagnifierContainer";

function MagnifierPreview(props) {
  const {
    imageSrc,
    imageAlt,
    largeImageSrc,
    largeImageAlt,
    className,
    style,
    cursorStyle,
    onImageLoad,
    onLargeImageLoad,
    renderOverlay,
    overlayOpacity,
    overlayBoxOpacity,
    transitionSpeed,
    onZoomStart,
    onZoomEnd
  } = props;

  const {
    stateOverride,
    onUpdate,
    zoomImageDimensions,
    previewSize,
    smallImageSize,
    position,
    inPlace
  } = React.useContext(MagnifierContext);

  return (
    <ReactInputPosition
      mouseActivationMethod={MOUSE_ACTIVATION.HOVER}
      touchActivationMethod={TOUCH_ACTIVATION.TOUCH}
      onActivate={onZoomStart}
      onDeactivate={onZoomEnd}
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
        largeImage={largeImageSrc}
        alt={imageAlt}
        largeAlt={largeImageAlt}
        zoomImageDimensions={zoomImageDimensions}
        previewSize={previewSize}
        smallImageSize={smallImageSize}
        onImageLoad={onImageLoad}
        onLargeImageLoad={onLargeImageLoad}
        renderOverlay={renderOverlay}
        overlayOpacity={overlayOpacity}
        overlayBoxOpacity={overlayBoxOpacity}
        transitionSpeed={transitionSpeed}
        inPlace={inPlace}
        position={position}
      />
    </ReactInputPosition>
  );
}

MagnifierPreview.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  cursorStyle: PropTypes.string,
  imageSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  largeImageSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  imageAlt: PropTypes.string,
  largeImageAlt: PropTypes.string,
  onImageLoad: PropTypes.func,
  onLargeImageLoad: PropTypes.func,
  renderOverlay: PropTypes.func,
  overlayBoxOpacity: PropTypes.number,
  overlayOpacity: PropTypes.number,
  transitionSpeed: PropTypes.number
};

MagnifierPreview.defaultProps = {
  cursorStyle: "crosshair",
  imageSrc: "",
  imageAlt: "",
  largeImageSrc: "",
  transitionSpeed: 0.4,
  onImageLoad: utils.noop,
  onLargeImageLoad: utils.noop
};

export default MagnifierPreview;
