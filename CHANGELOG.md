# Changelog

## 1.4.0 (July 3rd, 2020)

- Added props for changing activation method on SideBySideMagnifier and MagnifierPreview.

## 1.3.2 (May 9th, 2020)

- Added support for images with transparency in Magnifier component by hiding preview image when zoomed.

## 1.3.1 (March 18th, 2020)

- Fixed an issue preventing the custom magnifier components from functioning properly in an SSR project.
- Improved SSR support by ensuring that the client side DOM matches the server side DOM when hydrating.

## 1.3.0 (March 16th, 2020)

- Added additional layout/sizing options to the SideBySideMagnifier, including the ability to fill all available space on zoom.
- Added additional customization options to preview overlays.
- Added autoInPlace and inPlaceMinBreakpoint props to the MagnifierContainer component. These can be used to cause custom layout magnifiers to go into "in place" mode under certain conditions.

## 1.2.3 (February 6th, 2020)

- Added onZoomStart and onZoomEnd props.

## 1.2.2 (December 25th, 2019)

- Added a switchSides prop to the SideBySideMagnifier. When used, the zoomed image will be displayed to the left side of the preview (instead of the right side).

## 1.2.1 (October 1st, 2019)

- Added image fallback feature. imageSrc and largeImageSrc props now accept an array of paths.

## 1.2.0 (September 29th, 2019)

- Added MagnifierContainer, MagnifierPreview, and MagnifierZoom components for creating more advanced magnifier layouts.

## 1.1.2 (September 27th, 2019)

- Updated react-input-position to improve touch interactions.

## 1.1.1 (September 14th, 2019)

- Fixed typo in README.

## 1.1.0 (September 9th, 2019)

- Added onImageLoad and onLargeImageLoad props to all magnifier components.

## 1.0.7 (September 1st, 2019)

- Fixed remaining "window is not defined" error in SideBySideRenderer when used in SSR. All components now support SSR.

## 1.0.6 (September 1st, 2019)

- Updated react-input-position@1.1.7.
- Add styling to ensure large image width is set to auto.

## 1.0.5 (August 20th, 2019)

- Fixed "window is not defined" error in SideBySideRenderer when used in SSR.
- Font size is no longer zero when using PictureInPicture's renderOverlay render prop.
- Added tests for styles and utils helpers.

## 1.0.4 (June 1st, 2019)

- Improved the handling of images that are too small for the magnifying functionality. Some components used to behave erratically in this situation. Now, if an image is less than or equal to the size of the container, the magnifier component will simply size the image to the container and hide/disable the controls.
- Updated README.

## 1.0.3 (May 16th, 2019)

- Updated README.

## 1.0.2 (May 15th, 2019)

- Updated github links.

## 1.0.1 (March 14th, 2019)

- Updated react-input-position@1.1.3.
- Added CHANGELOG.

## 1.0.0 (January 14th, 2019)

- Initial public release.
