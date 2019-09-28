import React from "react";
import ImagePreviewOverlay from "./ImagePreviewOverlay";

function MagnifierPreviewRenderer(props) {
  const {
    image,
    alt,
    previewSize,
    smallImageSize,
    overlayOpacity,
    overlayBoxOpacity,
    active,
    onImageLoad,
    renderOverlay,
    transitionSpeed
  } = props;

  return (
    <div style={{ position: "relative" }}>
      <img
        onLoad={onImageLoad}
        style={{ display: "block", width: "100%" }}
        src={image}
        alt={alt}
      />
      <ImagePreviewOverlay
        previewWidth={previewSize.width}
        previewHeight={previewSize.height}
        previewPosLeft={previewSize.left}
        previewPosRight={previewSize.right}
        previewPosTop={previewSize.top}
        previewPosBottom={previewSize.bottom}
        imageWidth={smallImageSize.width}
        imageHeight={smallImageSize.height}
        overlayOpacity={overlayOpacity}
        overlayBoxOpacity={overlayBoxOpacity}
        active={active}
        transitionSpeed={transitionSpeed}
      />
      {renderOverlay ? renderOverlay(active) : null}
    </div>
  );
}

export default MagnifierPreviewRenderer;
