import React from "react";
import Image from "./Image";
import ImagePreviewOverlay from "./ImagePreviewOverlay";
import styles from "./styles";

function MagnifierPreviewRenderer(props) {
  const {
    image,
    largeImage,
    alt,
    largeAlt,
    previewSize,
    smallImageSize,
    overlayOpacity,
    overlayBoxOpacity,
    active,
    onImageLoad,
    onLargeImageLoad,
    renderOverlay,
    transitionSpeed,
    inPlace,
    position
  } = props;

  return (
    <div
      style={{ position: "relative", overflow: inPlace ? "hidden" : "visible" }}
    >
      <Image
        style={{ display: "block", width: "100%" }}
        src={image}
        alt={alt}
        onImageLoad={onImageLoad}
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
        active={active && !inPlace}
        transitionSpeed={transitionSpeed}
      />
      {inPlace ? (
        <div
          style={{
            ...styles.getZoomContainerStyle(
              smallImageSize.width,
              smallImageSize.height,
              inPlace,
              false
            ),
            opacity: active ? "1" : "0",
            transition: `opacity ${transitionSpeed}s ease`
          }}
        >
          <Image
            style={{
              ...styles.getLargeImageStyle(position.x, position.y, inPlace)
            }}
            src={largeImage}
            alt={largeAlt}
            onImageLoad={onLargeImageLoad}
          />
        </div>
      ) : null}
      {renderOverlay ? renderOverlay(active) : null}
    </div>
  );
}

export default MagnifierPreviewRenderer;
