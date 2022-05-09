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

var _MagnifierRenderer = _interopRequireDefault(require("./MagnifierRenderer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Magnifier = function Magnifier(props) {
  var imageSrc = props.imageSrc,
      largeImageSrc = props.largeImageSrc,
      imageAlt = props.imageAlt,
      cursorStyle = props.cursorStyle,
      cursorStyleActive = props.cursorStyleActive,
      renderOverlay = props.renderOverlay,
      dragToMove = props.dragToMove,
      className = props.className,
      style = props.style,
      mouseActivation = props.mouseActivation,
      touchActivation = props.touchActivation,
      interactionSettings = props.interactionSettings,
      onImageLoad = props.onImageLoad,
      onLargeImageLoad = props.onLargeImageLoad,
      onImageError = props.onImageError,
      onLargeImageError = props.onLargeImageError,
      onZoomStart = props.onZoomStart,
      onZoomEnd = props.onZoomEnd;
  var finalActiveCursorStyle = cursorStyleActive || dragToMove ? "move" : "zoom-out";
  return /*#__PURE__*/_react["default"].createElement(_reactInputPosition["default"], _extends({
    style: style,
    className: className,
    touchActivationMethod: touchActivation,
    mouseActivationMethod: mouseActivation,
    trackItemPosition: true,
    centerItemOnActivatePos: dragToMove,
    alignItemOnActivePos: !dragToMove,
    onActivate: onZoomStart,
    onDeactivate: onZoomEnd,
    itemPositionLimitBySize: true
  }, interactionSettings), /*#__PURE__*/_react["default"].createElement(_MagnifierRenderer["default"], {
    imageSrc: imageSrc,
    largeImageSrc: largeImageSrc,
    imageAlt: imageAlt,
    renderOverlay: renderOverlay,
    cursorStyle: cursorStyle,
    cursorStyleActive: finalActiveCursorStyle,
    onImageLoad: onImageLoad,
    onLargeImageLoad: onLargeImageLoad,
    onImageError: onImageError,
    onLargeImageError: onLargeImageError
  }));
};

Magnifier.propTypes = {
  imageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  largeImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  imageAlt: _propTypes["default"].string,
  cursorStyle: _propTypes["default"].string,
  cursorStyleActive: _propTypes["default"].string,
  renderOverlay: _propTypes["default"].func,
  dragToMove: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  mouseActivation: _propTypes["default"].string,
  touchActivation: _propTypes["default"].string,
  interactionSettings: _propTypes["default"].shape({
    tapDurationInMs: _propTypes["default"].number,
    doubleTapDurationInMs: _propTypes["default"].number,
    longTouchDurationInMs: _propTypes["default"].number,
    longTouchMoveLimit: _propTypes["default"].number,
    clickMoveLimit: _propTypes["default"].number
  }),
  onImageLoad: _propTypes["default"].func,
  onLargeImageLoad: _propTypes["default"].func
};
Magnifier.defaultProps = {
  imageSrc: "",
  largeImageSrc: "",
  imageAlt: "",
  cursorStyle: "zoom-in",
  cursorStyleActive: "",
  dragToMove: true,
  mouseActivation: _reactInputPosition.MOUSE_ACTIVATION.CLICK,
  touchActivation: _reactInputPosition.TOUCH_ACTIVATION.TAP,
  interactionSettings: {},
  onImageLoad: _utils["default"].noop,
  onLargeImageLoad: _utils["default"].noop
};
var _default = Magnifier;
exports["default"] = _default;