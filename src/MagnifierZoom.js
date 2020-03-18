import React from "react";
import PropTypes from "prop-types";
import utils from "./utils";
import styles from "./styles";
import { MagnifierContext } from "./MagnifierContainer";
import Image from "./Image";

function MagnifierZoom(props) {
  const {
    imageSrc,
    imageAlt,
    className,
    style,
    onImageLoad,
    transitionSpeed
  } = props;

  const {
    zoomImageDimensions,
    zoomContainerDimensions,
    position,
    onZoomImageLoad,
    zoomRef,
    zoomImageRef,
    isActive,
    inPlace
  } = React.useContext(MagnifierContext);

  let invalidVertical =
    zoomImageDimensions.height <= zoomContainerDimensions.height;
  let invalidHorizontal =
    zoomImageDimensions.width <= zoomContainerDimensions.width;

  return (
    <div
      className={className}
      style={{
        ...styles.getMagnifierZoomStyle(isActive && !inPlace, transitionSpeed),
        ...style,
        overflow: "hidden",
        pointerEvents: "none"
      }}
      ref={zoomRef}
    >
      <Image
        ref={zoomImageRef}
        style={{
          ...styles.getLargeImageStyle(
            invalidHorizontal ? 0 : position.x,
            invalidVertical ? 0 : position.y,
            true
          )
        }}
        src={imageSrc}
        alt={imageAlt}
        onImageLoad={e => {
          onZoomImageLoad(e);
          onImageLoad(e);
        }}
      />
    </div>
  );
}

MagnifierZoom.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  imageSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  imageAlt: PropTypes.string,
  onImageLoad: PropTypes.func,
  transitionSpeed: PropTypes.number
};

MagnifierZoom.defaultProps = {
  style: {},
  imageSrc: "",
  imageAlt: "",
  onImageLoad: utils.noop,
  transitionSpeed: 0.4
};

export default MagnifierZoom;
