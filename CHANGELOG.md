# Changelog

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
