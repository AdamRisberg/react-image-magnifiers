"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = _interopRequireDefault(require("./utils"));

var _styles = _interopRequireDefault(require("./styles"));

var _MagnifierContainer = require("./MagnifierContainer");

var _Image = _interopRequireDefault(require("./Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MagnifierZoom(props) {
  var imageSrc = props.imageSrc,
      imageAlt = props.imageAlt,
      className = props.className,
      style = props.style,
      _onImageLoad = props.onImageLoad,
      transitionSpeed = props.transitionSpeed;

  var _React$useContext = _react["default"].useContext(_MagnifierContainer.MagnifierContext),
      zoomImageDimensions = _React$useContext.zoomImageDimensions,
      zoomContainerDimensions = _React$useContext.zoomContainerDimensions,
      position = _React$useContext.position,
      onZoomImageLoad = _React$useContext.onZoomImageLoad,
      zoomRef = _React$useContext.zoomRef,
      zoomImageRef = _React$useContext.zoomImageRef,
      isActive = _React$useContext.isActive,
      inPlace = _React$useContext.inPlace;

  var invalidVertical = zoomImageDimensions.height <= zoomContainerDimensions.height;
  var invalidHorizontal = zoomImageDimensions.width <= zoomContainerDimensions.width;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className,
    style: _objectSpread(_objectSpread(_objectSpread({}, _styles["default"].getMagnifierZoomStyle(isActive && !inPlace, transitionSpeed)), style), {}, {
      overflow: "hidden",
      pointerEvents: "none"
    }),
    ref: zoomRef
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    ref: zoomImageRef,
    style: _objectSpread({}, _styles["default"].getLargeImageStyle(invalidHorizontal ? 0 : position.x, invalidVertical ? 0 : position.y, true)),
    src: imageSrc,
    alt: imageAlt,
    onImageLoad: function onImageLoad(e) {
      onZoomImageLoad(e);

      _onImageLoad(e);
    }
  }));
}

MagnifierZoom.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  imageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  imageAlt: _propTypes["default"].string,
  onImageLoad: _propTypes["default"].func,
  transitionSpeed: _propTypes["default"].number
};
MagnifierZoom.defaultProps = {
  style: {},
  imageSrc: "",
  imageAlt: "",
  onImageLoad: _utils["default"].noop,
  transitionSpeed: 0.4
};
var _default = MagnifierZoom;
exports["default"] = _default;