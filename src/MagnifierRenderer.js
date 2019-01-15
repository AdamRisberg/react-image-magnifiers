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
    renderOverlay
  } = props;

  const isActive = itemDimensions.width > elementDimensions.width && active;

  return (
    <div style={{ position: "relative" }}>
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