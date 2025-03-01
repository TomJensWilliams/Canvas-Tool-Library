// Create Shapes:

export function createLine({
  context,
  xStart,
  yStart,
  xChange,
  yChange,
  strokeStyle,
  lineWidth,
  lineCap,
}) {
  context.strokeStyle = strokeStyle;
  context.lineWidth = lineWidth;
  context.lineCap = lineCap;
  context.beginPath();
  context.moveTo(xStart, yStart);
  context.lineTo(xStart + xChange, yStart + yChange);
  context.stroke();
}

export function createCircle({
  context,
  x,
  y,
  r,
  startAngle,
  endAngle,
  strokeStyle,
  lineWidth,
  fillStyle,
}) {
  context.strokeStyle = strokeStyle;
  context.lineWidth = lineWidth;
  context.fillStyle = fillStyle;
  context.beginPath();
  context.arc(x, y, r, startAngle, endAngle);
  context.fill();
  context.stroke();
}

export function createRectangle({
  context,
  x,
  y,
  width,
  height,
  strokeStyle,
  lineWidth,
  fillStyle,
}) {
  context.strokeStyle = strokeStyle;
  context.lineWidth = lineWidth;
  context.fillStyle = fillStyle;
  context.beginPath();
  context.rect(x, y, width, height);
  context.fill();
  context.stroke();
}

export function createText({
  context,
  text,
  x,
  y,
  maxwidth,
  font,
  textBaseline,
  textAlign,
  strokeStyle,
  lineWidth,
  fillStyle,
}) {
  context.font = font;
  context.textBaseline = textBaseline;
  context.textAlign = textAlign;
  context.strokeStyle = strokeStyle;
  context.lineWidth = lineWidth;
  context.fillStyle = fillStyle;
  context.beginPath();
  context.fillText(text, x, y, maxwidth);
  context.strokeText(text, x, y, maxwidth);
}
