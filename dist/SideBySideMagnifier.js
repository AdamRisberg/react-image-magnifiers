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

var _SideBySideRenderer = _interopRequireDefault(require("./SideBySideRenderer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SideBySideMagnifier = function SideBySideMagnifier(props) {
  var imageSrc = props.imageSrc,
      largeImageSrc = props.largeImageSrc,
      imageAlt = props.imageAlt,
      overlayOpacity = props.overlayOpacity,
      overlayBoxOpacity = props.overlayBoxOpacity,
      overlayBackgroundColor = props.overlayBackgroundColor,
      overlayBoxColor = props.overlayBoxColor,
      overlayBoxImage = props.overlayBoxImage,
      overlayBoxImageSize = props.overlayBoxImageSize,
      cursorStyle = props.cursorStyle,
      alwaysInPlace = props.alwaysInPlace,
      transitionSpeed = props.transitionSpeed,
      transitionSpeedInPlace = props.transitionSpeedInPlace,
      renderOverlay = props.renderOverlay,
      className = props.className,
      style = props.style,
      onImageLoad = props.onImageLoad,
      onLargeImageLoad = props.onLargeImageLoad,
      switchSides = props.switchSides,
      onZoomStart = props.onZoomStart,
      onZoomEnd = props.onZoomEnd,
      fillAvailableSpace = props.fillAvailableSpace,
      fillAlignTop = props.fillAlignTop,
      fillGapLeft = props.fillGapLeft,
      fillGapRight = props.fillGapRight,
      fillGapTop = props.fillGapTop,
      fillGapBottom = props.fillGapBottom,
      inPlaceMinBreakpoint = props.inPlaceMinBreakpoint,
      zoomContainerBorder = props.zoomContainerBorder,
      zoomContainerBoxShadow = props.zoomContainerBoxShadow,
      mouseActivation = props.mouseActivation,
      touchActivation = props.touchActivation;
  return /*#__PURE__*/_react["default"].createElement(_reactInputPosition["default"], {
    style: style,
    className: className,
    touchActivationMethod: touchActivation,
    mouseActivationMethod: mouseActivation,
    onActivate: onZoomStart,
    onDeactivate: onZoomEnd,
    trackItemPosition: true,
    linkItemToActive: true
  }, /*#__PURE__*/_react["default"].createElement(_SideBySideRenderer["default"], {
    imageSrc: imageSrc,
    largeImageSrc: largeImageSrc,
    imageAlt: imageAlt,
    overlayOpacity: overlayOpacity,
    overlayBoxOpacity: overlayBoxOpacity,
    overlayBackgroundColor: overlayBackgroundColor,
    overlayBoxColor: overlayBoxColor,
    overlayBoxImage: overlayBoxImage,
    overlayBoxImageSize: overlayBoxImageSize,
    alwaysInPlace: alwaysInPlace,
    transitionSpeed: transitionSpeed,
    transitionSpeedInPlace: transitionSpeedInPlace,
    renderOverlay: renderOverlay,
    cursorStyle: cursorStyle,
    onImageLoad: onImageLoad,
    onLargeImageLoad: onLargeImageLoad,
    switchSides: switchSides,
    fillAvailableSpace: fillAvailableSpace,
    fillAlignTop: fillAlignTop,
    fillGapLeft: fillGapLeft,
    fillGapRight: fillGapRight,
    fillGapTop: fillGapTop,
    fillGapBottom: fillGapBottom,
    inPlaceMinBreakpoint: inPlaceMinBreakpoint,
    zoomContainerBorder: zoomContainerBorder,
    zoomContainerBoxShadow: zoomContainerBoxShadow
  }));
};

SideBySideMagnifier.propTypes = {
  imageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  largeImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  imageAlt: _propTypes["default"].string,
  overlayOpacity: _propTypes["default"].number,
  overlayBoxOpacity: _propTypes["default"].number,
  overlayBackgroundColor: _propTypes["default"].string,
  overlayBoxColor: _propTypes["default"].string,
  overlayBoxImage: _propTypes["default"].string,
  overlayBoxImageSize: _propTypes["default"].string,
  cursorStyle: _propTypes["default"].string,
  alwaysInPlace: _propTypes["default"].bool,
  transitionSpeed: _propTypes["default"].number,
  transitionSpeedInPlace: _propTypes["default"].number,
  renderOverlay: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  onImageLoad: _propTypes["default"].func,
  onLargeImageLoad: _propTypes["default"].func,
  fillAvailableSpace: _propTypes["default"].bool,
  fillAlignTop: _propTypes["default"].bool,
  fillGapLeft: _propTypes["default"].number,
  fillGapRight: _propTypes["default"].number,
  fillGapTop: _propTypes["default"].number,
  fillGapBottom: _propTypes["default"].number,
  inPlaceMinBreakpoint: _propTypes["default"].number,
  zoomContainerBorder: _propTypes["default"].string,
  zoomContainerBoxShadow: _propTypes["default"].string,
  mouseActivation: _propTypes["default"].string,
  touchActivation: _propTypes["default"].string
};
SideBySideMagnifier.defaultProps = {
  imageSrc: "",
  largeImageSrc: "",
  imageAlt: "",
  overlayOpacity: 0.5,
  overlayBoxOpacity: 0.8,
  overlayBackgroundColor: "#000",
  overlayBoxColor: "#fff",
  overlayBoxImage: "",
  overlayBoxImageSize: "",
  cursorStyle: "crosshair",
  transitionSpeed: 0.4,
  transitionSpeedInPlace: 0.4,
  onImageLoad: _utils["default"].noop,
  onLargeImageLoad: _utils["default"].noop,
  fillAvailableSpace: true,
  fillAlignTop: false,
  fillGapLeft: 0,
  fillGapRight: 0,
  fillGapTop: 0,
  fillGapBottom: 0,
  inPlaceMinBreakpoint: 0,
  zoomContainerBorder: "none",
  zoomContainerBoxShadow: "none",
  mouseActivation: _reactInputPosition.MOUSE_ACTIVATION.HOVER,
  touchActivation: _reactInputPosition.TOUCH_ACTIVATION.TOUCH
};
var _default = SideBySideMagnifier;
exports["default"] = _default;