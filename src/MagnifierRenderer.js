import React from "react";
import styles from "./styles";

const MagnifierRenderer = props => {
  const {
    itemPosition,
    active,
    elementDimensions,
    itemDimensions,
    imageSrc,
    largeImageSrc,
    imageAlt,
    itemRef,
    renderOverlay,
    cursorStyle,
    cursorStyleActive
  } = props;

  const legalSize = itemDimensions.width > elementDimensions.width;
  const isActive = legalSize && active;
  const finalCursorStyle = !legalSize
    ? "default"
    : active
    ? cursorStyleActive
    : cursorStyle;

  return (
    <div style={{ position: "relative", cursor: finalCursorStyle }}>
      <img
        style={{ width: "100%", display: "block" }}
        src={imageSrc}
        alt={imageAlt}
      />
      <div
        style={styles.getZoomContainerStyle(
          elementDimensions.width,
          elementDimensions.height,
          true
        )}
      >
        <img
          style={styles.getLargeImageStyle(
            itemPosition.x,
            itemPosition.y,
            isActive
          )}
          src={largeImageSrc || imageSrc}
          alt={imageAlt}
          ref={itemRef}
        />
      </div>
      {renderOverlay ? renderOverlay(active) : null}
    </div>
  );
};

export default MagnifierRenderer;
