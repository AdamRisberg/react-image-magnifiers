import React from "react";
import utils from "./utils";
import Image from "./Image";
import styles from "./styles";

const GlassRenderer = props => {
  const {
    itemRef,
    itemPosition,
    activePosition,
    elementDimensions,
    itemDimensions,
    active,
    imageSrc,
    largeImageSrc,
    imageAlt,
    magnifierBorderSize,
    magnifierBorderColor,
    magnifierBackgroundColor,
    square,
    magnifierSize,
    magnifierOffsetX,
    magnifierOffsetY,
    renderOverlay,
    cursorStyle,
    onImageLoad,
    onLargeImageLoad,
    onLoadRefresh
  } = props;

  const legalSize = itemDimensions.width > elementDimensions.width;
  const isActive = legalSize && active;

  const magnifierSizeNum = utils.convertWidthToPx(
    magnifierSize,
    elementDimensions.width
  );

  const positionOffset = magnifierSizeNum / 2;

  const position = {
    x: itemPosition.x - activePosition.x + positionOffset - magnifierBorderSize,
    y: itemPosition.y - activePosition.y + positionOffset - magnifierBorderSize
  };

  const divPosition = {
    x: activePosition.x - positionOffset + magnifierOffsetX,
    y: activePosition.y - positionOffset + magnifierOffsetY
  };

  const borderRadius = square ? "0" : "50%";

  return (
    <React.Fragment>
      <Image
        style={{
          width: "100%",
          display: "block",
          boxSizing: "border-box",
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
            magnifierSizeNum,
            magnifierSizeNum,
            true
          ),
          visibility: !isActive ? "hidden" : "visible",
          borderRadius,
          zIndex: "1",
          border: `${magnifierBorderSize}px solid ${magnifierBorderColor}`,
          transform: `translate(${divPosition.x}px, ${divPosition.y}px)`,
          backgroundColor: magnifierBackgroundColor,
          backgroundClip: "padding-box"
        }}
      >
        <Image
          style={styles.getLargeImageStyle(position.x, position.y, isActive)}
          ref={itemRef}
          src={largeImageSrc || imageSrc}
          alt={imageAlt}
          onImageLoad={onLargeImageLoad}
          onLoadRefresh={onLoadRefresh}
        />
      </div>
      {renderOverlay ? renderOverlay(active) : null}
    </React.Fragment>
  );
};

export default GlassRenderer;
