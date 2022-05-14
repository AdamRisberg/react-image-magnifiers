"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("./utils"));

var _styles = _interopRequireDefault(require("./styles"));

var _Image = _interopRequireDefault(require("./Image"));

var _ImagePreviewOverlay = _interopRequireDefault(require("./ImagePreviewOverlay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PictureInPictureRenderer = function PictureInPictureRenderer(props) {
  var active = props.active,
      itemPosition = props.itemPosition,
      elementDimensions = props.elementDimensions,
      itemDimensions = props.itemDimensions,
      imageSrc = props.imageSrc,
      largeImageSrc = props.largeImageSrc,
      imageAlt = props.imageAlt,
      itemRef = props.itemRef,
      previewSizePercentage = props.previewSizePercentage,
      containerRef = props.containerRef,
      previewVerticalPos = props.previewVerticalPos,
      previewOpacity = props.previewOpacity,
      previewOverlayOpacity = props.previewOverlayOpacity,
      previewOverlayBoxOpacity = props.previewOverlayBoxOpacity,
      previewOverlayBackgroundColor = props.previewOverlayBackgroundColor,
      previewOverlayBoxColor = props.previewOverlayBoxColor,
      previewOverlayBoxImage = props.previewOverlayBoxImage,
      previewOverlayBoxImageSize = props.previewOverlayBoxImageSize,
      renderOverlay = props.renderOverlay,
      cursorStyle = props.cursorStyle,
      cursorStyleActive = props.cursorStyleActive,
      onLoadRefresh = props.onLoadRefresh,
      _onImageLoad = props.onImageLoad,
      onLargeImageLoad = props.onLargeImageLoad;
  var sizeMult = 100 / previewSizePercentage;
  var containerTop = 0;
  var containerLeft = 0;
  var containerWidth = 0;

  if (containerRef.current) {
    containerWidth = containerRef.current.getBoundingClientRect().width;

    if (previewVerticalPos === "bottom") {
      containerTop = elementDimensions.height * (sizeMult - 1);
      containerRef.current.style.paddingTop = "".concat(containerTop, "px");
    } else {
      containerRef.current.style.paddingBottom = "".concat(elementDimensions.height * (sizeMult - 1), "px");
    }

    if (containerRef.current.style.textAlign === "right") {
      containerLeft = elementDimensions.width * (sizeMult - 1);
    }
  }

  var smallImageSize = {
    width: elementDimensions.width,
    height: elementDimensions.height
  };
  var previewSize = {
    width: Math.floor(smallImageSize.width * (smallImageSize.width / itemDimensions.width) * sizeMult),
    height: Math.floor(smallImageSize.height * (smallImageSize.height / itemDimensions.height) * sizeMult)
  };

  if (isNaN(previewSize.width)) {
    previewSize.width = 0;
    previewSize.height = 0;
  }

  var position = {
    x: 0,
    y: 0
  };

  var itemPositionAdj = _objectSpread({}, itemPosition);

  var previewOffset = {
    x: previewSize.width / 2,
    y: previewSize.height / 2
  };
  itemPositionAdj.x = Math.max(previewOffset.x, itemPositionAdj.x);
  itemPositionAdj.x = Math.min(smallImageSize.width - previewOffset.x, itemPositionAdj.x);
  itemPositionAdj.y = Math.max(previewOffset.y, itemPositionAdj.y);
  itemPositionAdj.y = Math.min(smallImageSize.height - previewOffset.y, itemPositionAdj.y);
  position = _objectSpread({}, itemPositionAdj);
  position.x = _utils["default"].convertRange(previewOffset.x, smallImageSize.width - previewOffset.x, itemDimensions.width * -1 + containerWidth, 0, position.x);
  position.y = _utils["default"].convertRange(previewOffset.y, smallImageSize.height - previewOffset.y, itemDimensions.height * -1 + smallImageSize.height * sizeMult, 0, position.y);
  position.x = _utils["default"].invertNumber(itemDimensions.width * -1 + containerWidth, 0, position.x);
  position.y = _utils["default"].invertNumber(itemDimensions.height * -1 + smallImageSize.height * sizeMult, 0, position.y);
  previewSize.left = Math.floor(itemPositionAdj.x - previewOffset.x) || 0;
  previewSize.right = Math.floor(itemPositionAdj.x + previewOffset.x) || 0;
  previewSize.top = Math.floor(itemPositionAdj.y - previewOffset.y) || 0;
  previewSize.bottom = Math.floor(itemPositionAdj.y + previewOffset.y) || 0;
  var legalSize = previewSize.width < smallImageSize.width;
  var finalCursorStyle = active ? cursorStyleActive : cursorStyle;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "relative",
      cursor: legalSize ? finalCursorStyle : "default"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    style: {
      width: "100%",
      display: "block",
      opacity: previewOpacity,
      visibility: legalSize ? "visible" : "hidden"
    },
    src: imageSrc,
    alt: imageAlt,
    onImageLoad: function onImageLoad(e) {
      onLoadRefresh();

      _onImageLoad(e);
    },
    onLoadRefresh: onLoadRefresh
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({}, _styles["default"].getZoomContainerStyle(smallImageSize.width, smallImageSize.height, true)), {}, {
      width: containerWidth + "px",
      height: elementDimensions.height * sizeMult + "px",
      position: "absolute",
      left: -containerLeft,
      top: -containerTop,
      fontSize: "1rem"
    })
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    style: _objectSpread(_objectSpread({}, _styles["default"].getLargeImageStyle(position.x, position.y, true)), {}, {
      visibility: legalSize ? "visible" : "hidden",
      zIndex: "-1"
    }),
    src: largeImageSrc || imageSrc,
    alt: imageAlt,
    ref: itemRef,
    onImageLoad: onLargeImageLoad,
    onLoadRefresh: onLoadRefresh
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: imageSrc,
    alt: imageAlt,
    style: {
      display: legalSize ? "none" : "block",
      width: "100%"
    }
  }), renderOverlay ? renderOverlay(active) : null), /*#__PURE__*/_react["default"].createElement(_ImagePreviewOverlay["default"], {
    previewWidth: previewSize.width,
    previewHeight: previewSize.height,
    previewPosLeft: previewSize.left,
    previewPosRight: previewSize.right,
    previewPosTop: previewSize.top,
    previewPosBottom: previewSize.bottom,
    imageWidth: smallImageSize.width,
    imageHeight: smallImageSize.height,
    overlayOpacity: previewOverlayOpacity,
    overlayBoxOpacity: previewOverlayBoxOpacity,
    overlayBackgroundColor: previewOverlayBackgroundColor,
    overlayBoxColor: previewOverlayBoxColor,
    overlayBoxImage: previewOverlayBoxImage,
    overlayBoxImageSize: previewOverlayBoxImageSize,
    active: legalSize
  }));
};

var _default = PictureInPictureRenderer;
exports["default"] = _default;