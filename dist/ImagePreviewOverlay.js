"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ImagePreviewOverlay = function ImagePreviewOverlay(props) {
  var previewWidth = props.previewWidth,
      previewHeight = props.previewHeight,
      previewPosLeft = props.previewPosLeft,
      previewPosRight = props.previewPosRight,
      previewPosTop = props.previewPosTop,
      previewPosBottom = props.previewPosBottom,
      imageWidth = props.imageWidth,
      imageHeight = props.imageHeight,
      overlayOpacity = props.overlayOpacity,
      overlayBoxOpacity = props.overlayBoxOpacity,
      active = props.active,
      transitionSpeed = props.transitionSpeed,
      overlayBackgroundColor = props.overlayBackgroundColor,
      overlayBoxColor = props.overlayBoxColor,
      overlayBoxImage = props.overlayBoxImage,
      overlayBoxImageSize = props.overlayBoxImageSize;
  var opacity = active ? overlayOpacity : 0;
  var boxOpacity = active ? overlayBoxOpacity : 0;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: _styles["default"].getOverlayCenterStyle(previewWidth, previewHeight, previewPosLeft, previewPosTop, boxOpacity, transitionSpeed, overlayBoxColor, overlayBoxImage, overlayBoxImageSize)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _styles["default"].getOverlayTopStyle(imageWidth, previewPosTop, opacity, transitionSpeed, overlayBackgroundColor)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _styles["default"].getOverlayLeftStyle(previewPosLeft, previewHeight, previewPosTop, opacity, transitionSpeed, overlayBackgroundColor)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _styles["default"].getOverlayRightStyle(imageWidth - previewPosRight, previewHeight, previewPosTop, opacity, transitionSpeed, overlayBackgroundColor)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _styles["default"].getOverlayBottomStyle(imageWidth, imageHeight - previewPosBottom, previewPosBottom, opacity, transitionSpeed, overlayBackgroundColor)
  }));
};

ImagePreviewOverlay.defaultProps = {
  overlayOpacity: 0.5,
  overlayBoxOpacity: 0.8,
  transitionSpeed: 0.4,
  overlayBackgroundColor: "#000",
  overlayBoxColor: "#fff",
  overlayBoxImage: "",
  overlayBoxImageSize: ""
};
var _default = ImagePreviewOverlay;
exports["default"] = _default;