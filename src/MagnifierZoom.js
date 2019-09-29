import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { MagnifierContext } from "./MagnifierContainer";

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
    isActive
  } = React.useContext(MagnifierContext);

  let invalidVertical =
    zoomImageDimensions.height <= zoomContainerDimensions.height;
  let invalidHorizontal =
    zoomImageDimensions.width <= zoomContainerDimensions.width;

  return (
    <div
      className={className}
      style={{
        ...styles.getMagnifierZoomStyle(isActive, transitionSpeed),
        ...style,
        overflow: "hidden"
      }}
      ref={zoomRef}
    >
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
  style: {},
  imageSrc: "",
  imageAlt: "",
  onImageLoad: () => {},
  transitionSpeed: 0.4
};

export default MagnifierZoom;
