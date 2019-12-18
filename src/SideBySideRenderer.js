import React from "react";
import utils from "./utils";
import styles from "./styles";
import Image from "./Image";
import ImagePreviewOverlay from "./ImagePreviewOverlay";

const SideBySideRenderer = props => {
  const {
    itemPosition,
    active,
    elementDimensions,
    elementOffset,
    itemDimensions,
    imageSrc,
    largeImageSrc,
    imageAlt,
    itemRef,
    overlayOpacity,
    overlayBoxOpacity,
    alwaysInPlace,
    transitionSpeed,
    transitionSpeedInPlace,
    renderOverlay,
    cursorStyle,
    onImageLoad,
    onLargeImageLoad,
    onLoadRefresh
  } = props;

  let inPlace = false;
  try {
    inPlace =
      alwaysInPlace ||
      elementDimensions.width * 2 + elementOffset.right > window.innerWidth;
  } catch (e) {}
  const legalSize = itemDimensions.width > elementDimensions.width;
  const isActive = legalSize && active;
  const transSpeed = inPlace ? transitionSpeedInPlace : transitionSpeed;

  const smallImageSize = {
    width: elementDimensions.width,
    height: elementDimensions.height
  };

  const previewSize = {
    width: Math.floor(
      smallImageSize.width * (smallImageSize.width / itemDimensions.width)
    ),
    height: Math.floor(
      smallImageSize.height * (smallImageSize.height / itemDimensions.height)
    )
  };

  let position = { x: 0, y: 0 };
  const itemPositionAdj = { ...itemPosition };

  const previewOffset = {
    x: inPlace ? 0 : previewSize.width / 2,
    y: inPlace ? 0 : previewSize.height / 2
  };

  itemPositionAdj.x = Math.max(previewOffset.x, itemPositionAdj.x);
  itemPositionAdj.x = Math.min(
    smallImageSize.width - previewOffset.x,
    itemPositionAdj.x
  );
  itemPositionAdj.y = Math.max(previewOffset.y, itemPositionAdj.y);
  itemPositionAdj.y = Math.min(
    smallImageSize.height - previewOffset.y,
    itemPositionAdj.y
  );

  position = { ...itemPositionAdj };

  position.x = utils.convertRange(
    previewOffset.x,
    smallImageSize.width - previewOffset.x,
    itemDimensions.width * -1 + smallImageSize.width,
    0,
    position.x
  );
  position.y = utils.convertRange(
    previewOffset.y,
    smallImageSize.height - previewOffset.y,
    itemDimensions.height * -1 + smallImageSize.height,
    0,
    position.y
  );

  position.x = utils.invertNumber(
    itemDimensions.width * -1 + smallImageSize.width,
    0,
    position.x
  );
  position.y = utils.invertNumber(
    itemDimensions.height * -1 + smallImageSize.height,
    0,
    position.y
  );

  previewSize.left = Math.floor(itemPositionAdj.x - previewOffset.x) || 0;
  previewSize.right = Math.floor(itemPositionAdj.x + previewOffset.x) || 0;
  previewSize.top = Math.floor(itemPositionAdj.y - previewOffset.y) || 0;
  previewSize.bottom = Math.floor(itemPositionAdj.y + previewOffset.y) || 0;

  return (
    <div
      style={{
        position: "relative",
        overflow: inPlace ? "hidden" : "visible"
      }}
    >
      <Image
        style={{
          width: "100%",
          display: "block",
          cursor: legalSize ? cursorStyle : "default"
        }}
        src={imageSrc}
        alt={imageAlt}
        onImageLoad={onImageLoad}
        onLoadRefresh={onLoadRefresh}
      />
      <div
        style={{
          ...styles.getZoomContainerStyle(
            smallImageSize.width,
            smallImageSize.height,
            inPlace
          ),
          opacity: isActive ? "1" : "0",
          transition: `opacity ${transSpeed}s ease`
        }}
      >
        <Image
          style={styles.getLargeImageStyle(position.x, position.y, true)}
          src={largeImageSrc || imageSrc}
          alt={imageAlt}
          ref={itemRef}
          onImageLoad={onLargeImageLoad}
          onLoadRefresh={onLoadRefresh}
        />
      </div>
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
        active={isActive && !inPlace}
        transitionSpeed={transSpeed}
      />
      {renderOverlay ? renderOverlay(active) : null}
    </div>
  );
};

export default SideBySideRenderer;
