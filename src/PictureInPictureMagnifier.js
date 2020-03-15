import React, { Component } from "react";
import PropTypes from "prop-types";
import utils from "./utils";
import ReactInputPosition, {
  TOUCH_ACTIVATION,
  MOUSE_ACTIVATION
} from "react-input-position";
import PictureInPictureRenderer from "./PictureInPictureRenderer";

class PictureInPictureMagnifier extends Component {
  containerRef = React.createRef();

  static propTypes = {
    imageSrc: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    largeImageSrc: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    imageAlt: PropTypes.string,
    previewSizePercentage: PropTypes.number,
    previewHorizontalPos: PropTypes.oneOf(["left", "right"]),
    previewVerticalPos: PropTypes.oneOf(["top", "bottom"]),
    previewOpacity: PropTypes.number,
    previewOverlayOpacity: PropTypes.number,
    previewOverlayBoxOpacity: PropTypes.number,
    previewOverlayBackgroundColor: PropTypes.string,
    previewOverlayBoxColor: PropTypes.string,
    previewOverlayBoxImage: PropTypes.string,
    previewOverlayBoxImageSize: PropTypes.string,
    cursorStyle: PropTypes.string,
    cursorStyleActive: PropTypes.string,
    shadow: PropTypes.bool,
    shadowColor: PropTypes.string,
    renderOverlay: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    onImageLoad: PropTypes.func,
    onLargeImageLoad: PropTypes.func,
    onZoomStart: PropTypes.func,
    onZoomEnd: PropTypes.func
  };

  static defaultProps = {
    imageSrc: "",
    largeImageSrc: "",
    imageAlt: "",
    previewSizePercentage: 35,
    previewHorizontalPos: "left",
    previewVerticalPos: "bottom",
    previewOpacity: 0.8,
    previewOverlayOpacity: 0.4,
    previewOverlayBoxOpacity: 0.8,
    previewOverlayBackgroundColor: "#000",
    previewOverlayBoxColor: "#fff",
    previewOverlayBoxImage: "",
    previewOverlayBoxImageSize: "",
    cursorStyle: "crosshair",
    cursorStyleActive: "",
    shadowColor: "rgba(0,0,0,.4)",
    onImageLoad: utils.noop,
    onLargeImageLoad: utils.noop
  };

  render() {
    const {
      imageSrc,
      largeImageSrc,
      imageAlt,
      previewSizePercentage,
      previewHorizontalPos,
      previewVerticalPos,
      previewOpacity,
      previewOverlayOpacity,
      previewOverlayBoxOpacity,
      previewOverlayBackgroundColor,
      previewOverlayBoxColor,
      previewOverlayBoxImage,
      previewOverlayBoxImageSize,
      cursorStyle,
      cursorStyleActive,
      shadow,
      shadowColor,
      renderOverlay,
      className,
      style,
      onImageLoad,
      onLargeImageLoad,
      onZoomStart,
      onZoomEnd
    } = this.props;

    return (
      <div
        ref={this.containerRef}
        style={{
          ...style,
          textAlign: previewHorizontalPos,
          overflow: "hidden",
          fontSize: "0"
        }}
        className={className}
      >
        <ReactInputPosition
          style={{
            width: `${previewSizePercentage}%`,
            display: "inline-block",
            boxShadow: shadow ? `1px -1px 1px ${shadowColor}` : "none"
          }}
          touchActivationMethod={TOUCH_ACTIVATION.TOUCH}
          mouseActivationMethod={MOUSE_ACTIVATION.MOUSE_DOWN}
          onActivate={onZoomStart}
          onDeactivate={onZoomEnd}
          trackItemPosition
          itemPositionMinX={0}
          itemPositionMinY={0}
          itemPositionMaxX={-0.1}
          itemPositionMaxY={-0.1}
          linkItemToActive
          centerItemOnLoad
        >
          <PictureInPictureRenderer
            containerRef={this.containerRef}
            previewSizePercentage={previewSizePercentage}
            previewVerticalPos={previewVerticalPos}
            previewOpacity={previewOpacity}
            previewOverlayOpacity={previewOverlayOpacity}
            previewOverlayBoxOpacity={previewOverlayBoxOpacity}
            previewOverlayBackgroundColor={previewOverlayBackgroundColor}
            previewOverlayBoxColor={previewOverlayBoxColor}
            previewOverlayBoxImage={previewOverlayBoxImage}
            previewOverlayBoxImageSize={previewOverlayBoxImageSize}
            imageSrc={imageSrc}
            largeImageSrc={largeImageSrc}
            imageAlt={imageAlt}
            renderOverlay={renderOverlay}
            cursorStyle={cursorStyle}
            cursorStyleActive={cursorStyleActive || cursorStyle}
            onImageLoad={onImageLoad}
            onLargeImageLoad={onLargeImageLoad}
          />
        </ReactInputPosition>
      </div>
    );
  }
}

export default PictureInPictureMagnifier;
