import React from "react";
import styles from "./styles";

const ImagePreviewOverlay = (props) => {
  const {
    previewWidth,
    previewHeight,
    previewPosLeft,
    previewPosRight,
    previewPosTop,
    previewPosBottom,
    imageWidth,
    imageHeight,
    overlayOpacity,
    overlayBoxOpacity,
    active,
    transitionSpeed
  } = props;

  const opacity = active ? overlayOpacity : 0;
  const boxOpacity =  active ? overlayBoxOpacity : 0;

  return (
    <React.Fragment>
      <div style={styles.getOverlayCenterStyle(
        previewWidth,
        previewHeight,
        previewPosLeft,
        previewPosTop,
        boxOpacity,
        transitionSpeed
      )}></div>
      <div style={styles.getOverlayTopStyle(
        imageWidth,
        previewPosTop,
        opacity,
        transitionSpeed
      )}></div>
      <div style={styles.getOverlayLeftStyle(
        previewPosLeft,
        previewHeight,
        previewPosTop,
        opacity,
        transitionSpeed
      )}></div>
      <div style={styles.getOverlayRightStyle(
        imageWidth - previewPosRight,
        previewHeight,
        previewPosTop,
        opacity,
        transitionSpeed
      )}></div>
      <div style={styles.getOverlayBottomStyle(
        imageWidth,
        imageHeight - previewPosBottom,
        previewPosBottom,
        opacity,
        transitionSpeed
      )}></div>
    </React.Fragment>
  );
};

ImagePreviewOverlay.defaultProps = {
  overlayOpacity: .5,
  overlayBoxOpacity: .8,
  transitionSpeed: .4
}

export default ImagePreviewOverlay;