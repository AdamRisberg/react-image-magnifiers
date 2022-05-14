"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = _interopRequireDefault(require("./utils"));

var _reactInputPosition = _interopRequireWildcard(require("react-input-position"));

var _MagnifierPreviewRenderer = _interopRequireDefault(require("./MagnifierPreviewRenderer"));

var _MagnifierContainer = require("./MagnifierContainer");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function MagnifierPreview(props) {
  var imageSrc = props.imageSrc,
      imageAlt = props.imageAlt,
      largeImageSrc = props.largeImageSrc,
      className = props.className,
      style = props.style,
      cursorStyle = props.cursorStyle,
      onImageLoad = props.onImageLoad,
      onLargeImageLoad = props.onLargeImageLoad,
      renderOverlay = props.renderOverlay,
      overlayOpacity = props.overlayOpacity,
      overlayBoxOpacity = props.overlayBoxOpacity,
      overlayBackgroundColor = props.overlayBackgroundColor,
      overlayBoxColor = props.overlayBoxColor,
      overlayBoxImage = props.overlayBoxImage,
      overlayBoxImageSize = props.overlayBoxImageSize,
      transitionSpeed = props.transitionSpeed,
      onZoomStart = props.onZoomStart,
      onZoomEnd = props.onZoomEnd,
      mouseActivation = props.mouseActivation,
      touchActivation = props.touchActivation;

  var _React$useContext = _react["default"].useContext(_MagnifierContainer.MagnifierContext),
      stateOverride = _React$useContext.stateOverride,
      onUpdate = _React$useContext.onUpdate,
      zoomImageDimensions = _React$useContext.zoomImageDimensions,
      previewSize = _React$useContext.previewSize,
      smallImageSize = _React$useContext.smallImageSize,
      position = _React$useContext.position,
      inPlace = _React$useContext.inPlace;

  return /*#__PURE__*/_react["default"].createElement(_reactInputPosition["default"], {
    touchActivationMethod: touchActivation,
    mouseActivationMethod: mouseActivation,
    onActivate: onZoomStart,
    onDeactivate: onZoomEnd,
    className: className,
    style: style,
    cursorStyle: cursorStyle,
    trackItemPosition: true,
    linkItemToActive: true,
    stateOverride: stateOverride,
    onUpdate: onUpdate
  }, /*#__PURE__*/_react["default"].createElement(_MagnifierPreviewRenderer["default"], {
    image: imageSrc,
    largeImage: largeImageSrc,
    alt: imageAlt,
    zoomImageDimensions: zoomImageDimensions,
    previewSize: previewSize,
    smallImageSize: smallImageSize,
    onImageLoad: onImageLoad,
    onLargeImageLoad: onLargeImageLoad,
    renderOverlay: renderOverlay,
    overlayOpacity: overlayOpacity,
    overlayBoxOpacity: overlayBoxOpacity,
    overlayBackgroundColor: overlayBackgroundColor,
    overlayBoxColor: overlayBoxColor,
    overlayBoxImage: overlayBoxImage,
    overlayBoxImageSize: overlayBoxImageSize,
    transitionSpeed: transitionSpeed,
    inPlace: inPlace,
    position: position
  }));
}

MagnifierPreview.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  cursorStyle: _propTypes["default"].string,
  imageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  largeImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  imageAlt: _propTypes["default"].string,
  onImageLoad: _propTypes["default"].func,
  onLargeImageLoad: _propTypes["default"].func,
  renderOverlay: _propTypes["default"].func,
  overlayBoxOpacity: _propTypes["default"].number,
  overlayOpacity: _propTypes["default"].number,
  overlayBackgroundColor: _propTypes["default"].string,
  overlayBoxColor: _propTypes["default"].string,
  overlayBoxImage: _propTypes["default"].string,
  overlayBoxImageSize: _propTypes["default"].string,
  transitionSpeed: _propTypes["default"].number,
  mouseActivation: _propTypes["default"].string,
  touchActivation: _propTypes["default"].string
};
MagnifierPreview.defaultProps = {
  cursorStyle: "crosshair",
  imageSrc: "",
  imageAlt: "",
  overlayOpacity: 0.5,
  overlayBoxOpacity: 0.8,
  overlayBackgroundColor: "#000",
  overlayBoxColor: "#fff",
  overlayBoxImage: "",
  overlayBoxImageSize: "",
  transitionSpeed: 0.4,
  onImageLoad: _utils["default"].noop,
  onLargeImageLoad: _utils["default"].noop,
  mouseActivation: _reactInputPosition.MOUSE_ACTIVATION.HOVER,
  touchActivation: _reactInputPosition.TOUCH_ACTIVATION.TOUCH
};
var _default = MagnifierPreview;
exports["default"] = _default;