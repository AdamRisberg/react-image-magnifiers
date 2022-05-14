"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Image = _interopRequireDefault(require("./Image"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MagnifierRenderer = function MagnifierRenderer(props) {
  var itemPosition = props.itemPosition,
      active = props.active,
      elementDimensions = props.elementDimensions,
      itemDimensions = props.itemDimensions,
      imageSrc = props.imageSrc,
      largeImageSrc = props.largeImageSrc,
      imageAlt = props.imageAlt,
      itemRef = props.itemRef,
      renderOverlay = props.renderOverlay,
      cursorStyle = props.cursorStyle,
      cursorStyleActive = props.cursorStyleActive,
      onImageLoad = props.onImageLoad,
      onLargeImageLoad = props.onLargeImageLoad,
      onLoadRefresh = props.onLoadRefresh;
  var legalSize = itemDimensions.width > elementDimensions.width;
  var isActive = legalSize && active;
  var finalCursorStyle = !legalSize ? "default" : active ? cursorStyleActive : cursorStyle;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "relative",
      cursor: finalCursorStyle
    }
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    style: {
      display: "block",
      visibility: isActive ? "hidden" : "visible",
      width: "100%"
    },
    src: imageSrc,
    alt: imageAlt,
    onImageLoad: onImageLoad,
    onLoadRefresh: onLoadRefresh
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _styles["default"].getZoomContainerStyle(elementDimensions.width, elementDimensions.height, true)
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    style: _styles["default"].getLargeImageStyle(itemPosition.x, itemPosition.y, isActive),
    src: largeImageSrc || imageSrc,
    alt: imageAlt,
    ref: itemRef,
    onImageLoad: onLargeImageLoad,
    onLoadRefresh: onLoadRefresh
  })), renderOverlay ? renderOverlay(active) : null);
};

var _default = MagnifierRenderer;
exports["default"] = _default;