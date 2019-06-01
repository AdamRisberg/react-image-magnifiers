import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactInputPosition, {
  TOUCH_ACTIVATION,
  MOUSE_ACTIVATION
} from "react-input-position";
import PictureInPictureRenderer from "./PictureInPictureRenderer";

class PictureInPictureMagnifier extends Component {
  containerRef = React.createRef();

  static propTypes = {
    imageSrc: PropTypes.string,
    largeImageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    previewSizePercentage: PropTypes.number,
    previewHorizontalPos: PropTypes.oneOf(["left", "right"]),
    previewVerticalPos: PropTypes.oneOf(["top", "bottom"]),
    previewOpacity: PropTypes.number,
    previewOverlayOpacity: PropTypes.number,
    previewOverlayBoxOpacity: PropTypes.number,
    cursorStyle: PropTypes.string,
    cursorStyleActive: PropTypes.string,
    shadow: PropTypes.bool,
    shadowColor: PropTypes.string,
    renderOverlay: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object
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
    cursorStyle: "crosshair",
    cursorStyleActive: "",
    shadowColor: "rgba(0,0,0,.4)"
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
      cursorStyle,
      cursorStyleActive,
      shadow,
      shadowColor,
      renderOverlay,
      className,
      style
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
            imageSrc={imageSrc}
            largeImageSrc={largeImageSrc}
            imageAlt={imageAlt}
            renderOverlay={renderOverlay}
            cursorStyle={cursorStyle}
            cursorStyleActive={cursorStyleActive || cursorStyle}
          />
        </ReactInputPosition>
      </div>
    );
  }
}

export default PictureInPictureMagnifier;
