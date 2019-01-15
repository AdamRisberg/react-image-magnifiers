function invertNumber(min, max, num) {
  return (max + min) - num;
}

function convertRange(oldMin, oldMax, newMin, newMax, oldValue) {
  const percent = (oldValue - oldMin) / (oldMax - oldMin);
  return percent * (newMax - newMin) + newMin;
}

function convertWidthToPx(width, containerWidth) {
  if(typeof width === "number") {
    return width;
  }
  if(typeof width !== "string") {
    throw new Error(`Received: ${width} - Size must be a number or string`);
  }
  if(width.substr(-1) === "%") {
    const percent = 100 / Number(width.slice(0, -1));
    return containerWidth / percent;
  }
  if(width.substr(-2) === "px") {
    return Number(width.slice(0, -2));
  }
  return Number(width);
}

function convertWidthToString(width) {
  if(typeof width === "number") {
    return width + "px";
  }
  return width;
}

export default {
  invertNumber,
  convertRange,
  convertWidthToPx,
  convertWidthToString
};