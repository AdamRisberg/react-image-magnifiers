import {
  MOUSE_ACTIVATION as MOUSE,
  TOUCH_ACTIVATION as TOUCH
} from "react-input-position";

export const MOUSE_ACTIVATION = {
  CLICK: MOUSE.CLICK,
  DOUBLE_CLICK: MOUSE.DOUBLE_CLICK
};
export const TOUCH_ACTIVATION = {
  TAP: TOUCH.TAP,
  DOUBLE_TAP: TOUCH.DOUBLE_TAP,
  LONG_TOUCH: TOUCH.LONG_TOUCH
};
export { default as SideBySideMagnifier } from "./SideBySideMagnifier";
export { default as Magnifier } from "./Magnifier";
export { default as GlassMagnifier } from "./GlassMagnifier";
export {
  default as PictureInPictureMagnifier
} from "./PictureInPictureMagnifier";
export { default as MagnifierContainer } from "./MagnifierContainer";
export { default as MagnifierPreview } from "./MagnifierPreview";
export { default as MagnifierZoom } from "./MagnifierZoom";
