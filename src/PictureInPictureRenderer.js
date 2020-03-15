import React from "react";
import utils from "./utils";
import styles from "./styles";
import Image from "./Image";
import ImagePreviewOverlay from "./ImagePreviewOverlay";

const PictureInPictureRenderer = props => {
  const {
    active,
    itemPosition,
    elementDimensions,
    itemDimensions,
    imageSrc,
    largeImageSrc,
    imageAlt,
    itemRef,
    previewSizePercentage,
    containerRef,
    previewVerticalPos,
    previewOpacity,
    previewOverlayOpacity,
    previewOverlayBoxOpacity,
    previewOverlayBackgroundColor,
    previewOverlayBoxColor,
    previewOverlayBoxImage,
    previewOverlayBoxImageSize,
    renderOverlay,
    cursorStyle,
    cursorStyleActive,
    onLoadRefresh,
    onImageLoad,
    onLargeImageLoad
  } = props;

  const sizeMult = 100 / previewSizePercentage;

  let containerTop = 0;
  let containerLeft = 0;
  let containerWidth = 0;

  if (containerRef.current) {
    containerWidth = containerRef.current.getBoundingClientRect().width;

    if (previewVerticalPos === "bottom") {
      containerTop = elementDimensions.height * (sizeMult - 1);
      containerRef.current.style.paddingTop = `${containerTop}px`;
    } else {
      containerRef.current.style.paddingBottom = `${elementDimensions.height *
        (sizeMult - 1)}px`;
    }

    if (containerRef.current.style.textAlign === "right") {
      containerLeft = elementDimensions.width * (sizeMult - 1);
    }
  }

  const smallImageSize = {
    width: elementDimensions.width,
    height: elementDimensions.height
  };

  const previewSize = {
    width: Math.floor(
      smallImageSize.width *
        (smallImageSize.width / itemDimensions.width) *
        sizeMult
    ),
    height: Math.floor(
      smallImageSize.height *
        (smallImageSize.height / itemDimensions.height) *
        sizeMult
    )
  };

  if (isNaN(previewSize.width)) {
    previewSize.width = 0;
    previewSize.height = 0;
  }

  let position = { x: 0, y: 0 };
  const itemPositionAdj = { ...itemPosition };

  const previewOffset = {
    x: previewSize.width / 2,
    y: previewSize.height / 2
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
    itemDimensions.width * -1 + containerWidth,
    0,
    position.x
  );
  position.y = utils.convertRange(
    previewOffset.y,
    smallImageSize.height - previewOffset.y,
    itemDimensions.height * -1 + smallImageSize.height * sizeMult,
    0,
    position.y
  );

  position.x = utils.invertNumber(
    itemDimensions.width * -1 + containerWidth,
    0,
    position.x
  );
  position.y = utils.invertNumber(
    itemDimensions.height * -1 + smallImageSize.height * sizeMult,
    0,
    position.y
  );

  previewSize.left = Math.floor(itemPositionAdj.x - previewOffset.x) || 0;
  previewSize.right = Math.floor(itemPositionAdj.x + previewOffset.x) || 0;
  previewSize.top = Math.floor(itemPositionAdj.y - previewOffset.y) || 0;
  previewSize.bottom = Math.floor(itemPositionAdj.y + previewOffset.y) || 0;

  const legalSize = previewSize.width < smallImageSize.width;
  const finalCursorStyle = active ? cursorStyleActive : cursorStyle;

  return (
    <div
      style={{
        position: "relative",
        cursor: legalSize ? finalCursorStyle : "default"
      }}
    >
      <Image
        style={{
          width: "100%",
          display: "block",
          opacity: previewOpacity,
          visibility: legalSize ? "visible" : "hidden"
        }}
        src={imageSrc}
        alt={imageAlt}
        onImageLoad={e => {
          onLoadRefresh();
          onImageLoad(e);
        }}
        onLoadRefresh={onLoadRefresh}
      />
      <div
        style={{
          ...styles.getZoomContainerStyle(
            smallImageSize.width,
            smallImageSize.height,
            true
          ),
          width: containerWidth + "px",
          height: elementDimensions.height * sizeMult + "px",
          position: "absolute",
          left: -containerLeft,
          top: -containerTop,
          fontSize: "1rem"
        }}
      >
        <Image
          style={{
            ...styles.getLargeImageStyle(position.x, position.y, true),
            visibility: legalSize ? "visible" : "hidden",
            zIndex: "-1"
          }}
          src={largeImageSrc || imageSrc}
          alt={imageAlt}
          ref={itemRef}
          onImageLoad={onLargeImageLoad}
          onLoadRefresh={onLoadRefresh}
        />
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{
            display: legalSize ? "none" : "block",
            width: "100%"
          }}
        />
        {renderOverlay ? renderOverlay(active) : null}
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
        overlayOpacity={previewOverlayOpacity}
        overlayBoxOpacity={previewOverlayBoxOpacity}
        overlayBackgroundColor={previewOverlayBackgroundColor}
        overlayBoxColor={previewOverlayBoxColor}
        overlayBoxImage={previewOverlayBoxImage}
        overlayBoxImageSize={previewOverlayBoxImageSize}
        active={legalSize}
      />
    </div>
  );
};

export default PictureInPictureRenderer;
