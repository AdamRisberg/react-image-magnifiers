import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

function MagnifierZoom(props) {
  const {
    imageSrc,
    imageAlt,
    className,
    style,
    elementDimensions,
    active,
    zoomRef,
    onZoomImageLoad,
    position,
    onImageLoad,
    transitionSpeed,
    zoomImageDimensions,
    zoomContainerDimensions
  } = props;

  const containerStyle = {
    ...styles.getMagnifierZoomStyle(
      `${elementDimensions.width}px`,
      `${elementDimensions.height}px`,
      true || active,
      transitionSpeed
    ),
    ...style,
    overflow: "hidden"
  };

  let invalidVertical =
    zoomImageDimensions.height <= zoomContainerDimensions.height;
  let invalidHorizontal =
    zoomImageDimensions.width <= zoomContainerDimensions.width;

  return (
    <div className={className} style={containerStyle} ref={zoomRef}>
      <img
        style={{
          ...styles.getLargeImageStyle(
            invalidHorizontal ? 0 : position.x,
            invalidVertical ? 0 : position.y,
            true
          )
        }}
        onLoad={e => {
          onZoomImageLoad(e);
          onImageLoad(e);
        }}
        src={imageSrc}
        alt={imageAlt}
      />
    </div>
  );
}

MagnifierZoom.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  onImageLoad: PropTypes.func,
  transitionSpeed: PropTypes.number
};

MagnifierZoom.defaultProps = {
  imageSrc: "",
  imageAlt: "",
  onImageLoad: () => {},
  transitionSpeed: 0.4
};

export default MagnifierZoom;
