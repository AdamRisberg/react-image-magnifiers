import React from "react";
import Image from "./Image";
import ImagePreviewOverlay from "./ImagePreviewOverlay";
import styles from "./styles";

function MagnifierPreviewRenderer(props) {
  const {
    image,
    largeImage,
    alt,
    previewSize,
    smallImageSize,
    overlayOpacity,
    overlayBoxOpacity,
    overlayBackgroundColor,
    overlayBoxColor,
    overlayBoxImage,
    overlayBoxImageSize,
    active,
    onImageLoad,
    onLargeImageLoad,
    renderOverlay,
    transitionSpeed,
    inPlace: shouldBeInPlace,
    position
  } = props;

  // Ensures that client and server dom match when using SSR.
  const [inPlace, setInPlace] = React.useState(false);
  React.useEffect(() => {
    setInPlace(shouldBeInPlace);
  }, [shouldBeInPlace]);

  return (
    <div style={{ position: "relative" }}>
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
        overlayBackgroundColor={overlayBackgroundColor}
        overlayBoxColor={overlayBoxColor}
        overlayBoxImage={overlayBoxImage}
        overlayBoxImageSize={overlayBoxImageSize}
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
            alt={alt}
            onImageLoad={onLargeImageLoad}
          />
        </div>
      ) : null}
      {renderOverlay ? renderOverlay(active) : null}
    </div>
  );
}

export default MagnifierPreviewRenderer;
