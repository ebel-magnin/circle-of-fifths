/* Get DOM Element */
const bodyElement = document.querySelector("body");
const divElement = document.querySelector(".js-render-svg");

/* Set global variables */
const viewBoxWidth = 500;
const viewBoxHeight = 500;
const viewBox = `0 0 ${viewBoxWidth} ${viewBoxHeight}`;
const nameSpace = "http://www.w3.org/2000/svg";
const centerX = viewBoxWidth / 2;
const centerY = viewBoxHeight / 2;
const firstCircleRadius = 200;
const secondCircleRadius = 150;
const thirdCircleRadius = 100;
const numLines = 12;

/* Set attributes for elements */
const titleAttributes = {
  x: 250,
  y: 20,
  "text-anchor": "middle",
  "dominant-baseline": "middle",
  "font-size": "1.5em",
};
const outerDropShadowAttributes = {
  dx: 0.4,
  dy: 0.4,
  stdDeviation: 10,
};
const innerDropShadowAttributes = {
  dx: 0.2,
  dy: 0.2,
  stdDeviation: 5,
};
const firstCircleAttributes = {
  cx: viewBoxWidth / 2,
  cy: viewBoxHeight / 2,
  r: firstCircleRadius,
  stroke: "#666",
  fill: "#ffffff",
  style: "filter:url(#outer-shadow)",
};
const secondCircleAttributes = {
  cx: viewBoxWidth / 2,
  cy: viewBoxHeight / 2,
  r: secondCircleRadius,
  stroke: "#c3c3c3",
  fill: "#d8d8d8",
};
const thirdCircleAttributes = {
  cx: viewBoxWidth / 2,
  cy: viewBoxHeight / 2,
  r: thirdCircleRadius,
  stroke: "#c3c3c3",
  fill: "#ffffff",
  style: "filter:url(#inner-shadow)",
};
const lineAttributes = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  stroke: "#c3c3c3",
};
const scaleKeysAttributes = {
  "text-anchor": "middle",
  "dominant-baseline": "middle",
  class: "",
  "data-key": "",
  x: 0,
  y: 0,
};
const scaleNameElementAttributes = {
  "text-anchor": "middle",
  "dominant-baseline": "middle",
  class: "js-scale-name small",
  x: 250,
  y: 220,
};
const scaleElementAttributes = {
  "text-anchor": "middle",
  "dominant-baseline": "middle",
  class: "js-scale",
  x: 250,
  y: 250,
};
const scaleChordsElementAttributes = {
  "text-anchor": "middle",
  "dominant-baseline": "middle",
  class: "js-scale-chords small",
  x: 250,
  y: 280,
};

/* Explanation */
const explanation =
  "To show and play the scale, click one of the 12 major or minor keys. The name of the chosen scale, the scale notes and the scale chords (triads) will be shown in the middle of the circle and the scale will be played in ascending and descending order. To clear the scale, click the name of the scale.";

/* Function to set attributes */
function setAttributes(element, attributes) {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

/* Create svg element */
const svgElement = document.createElementNS(nameSpace, "svg");
svgElement.setAttribute("viewBox", viewBox);
svgElement.setAttribute("xlmns", nameSpace);
divElement.append(svgElement);

/* Create defs element */
const defsElement = document.createElementNS(nameSpace, "defs");
svgElement.append(defsElement);

/* Create first filter element */
const firstFilterElement = document.createElementNS(nameSpace, "filter");
firstFilterElement.setAttribute("id", "outer-shadow");
defsElement.append(firstFilterElement);

/* Create second filter element */
const secondFilterElement = document.createElementNS(nameSpace, "filter");
secondFilterElement.setAttribute("id", "inner-shadow");
defsElement.append(secondFilterElement);

/* Create outer dropshadow element */
const outerDropShadowElement = document.createElementNS(
  nameSpace,
  "feDropShadow"
);
setAttributes(outerDropShadowElement, outerDropShadowAttributes);
firstFilterElement.append(outerDropShadowElement);

/* Create inner dropshadow element */
const innerDropShadowElement = document.createElementNS(
  nameSpace,
  "feDropShadow"
);
setAttributes(innerDropShadowElement, innerDropShadowAttributes);
secondFilterElement.append(innerDropShadowElement);

/* Create title */
const titleElement = document.createElementNS(nameSpace, "text");
setAttributes(titleElement, titleAttributes);
titleElement.textContent = "Circle of Fifths";
svgElement.append(titleElement);

/* Create first circle */
const firstCircle = document.createElementNS(nameSpace, "circle");
setAttributes(firstCircle, firstCircleAttributes);
svgElement.append(firstCircle);

/* Create second circle */
const secondCircle = document.createElementNS(nameSpace, "circle");
setAttributes(secondCircle, secondCircleAttributes);
svgElement.append(secondCircle);

/* Render the lines */
const angleStep = (2 * Math.PI) / numLines;
const angleOffset = Math.PI / numLines;
for (let i = 0; i < numLines; i++) {
  const lineElement = document.createElementNS(nameSpace, "line");
  const angle = i * angleStep + angleOffset;
  lineAttributes.x1 = centerX + firstCircleRadius * Math.cos(angle);
  lineAttributes.y1 = centerY + firstCircleRadius * Math.sin(angle);
  lineAttributes.x2 = centerX - firstCircleRadius * Math.cos(angle);
  lineAttributes.y2 = centerY - firstCircleRadius * Math.sin(angle);
  setAttributes(lineElement, lineAttributes);
  svgElement.append(lineElement);
}

/* Create third circle */
const thirdCircle = document.createElementNS(nameSpace, "circle");
setAttributes(thirdCircle, thirdCircleAttributes);
svgElement.append(thirdCircle);

/* Render major scale keys */
const majorOffset = (firstCircleRadius + secondCircleRadius) / 2;
for (let i = 0; i < scaleKeys.length; i++) {
  const textElement = document.createElementNS(nameSpace, "text");
  const angle = i * angleStep - Math.PI / 2;
  scaleKeysAttributes.x = centerX + Math.cos(angle) * majorOffset;
  scaleKeysAttributes.y = centerY + Math.sin(angle) * majorOffset;
  scaleKeysAttributes.class = "major key";
  scaleKeysAttributes["data-key"] = scaleKeys[i].major.key;
  setAttributes(textElement, scaleKeysAttributes);
  textElement.textContent = scaleKeys[i].major.show;
  svgElement.append(textElement);
}

/* Render minor scale keys */
const minorOffset = (secondCircleRadius + thirdCircleRadius) / 2;
for (let i = 0; i < scaleKeys.length; i++) {
  const textElement = document.createElementNS(nameSpace, "text");
  const angle = i * angleStep - Math.PI / 2;
  scaleKeysAttributes.x = centerX + Math.cos(angle) * minorOffset;
  scaleKeysAttributes.y = centerY + Math.sin(angle) * minorOffset;
  scaleKeysAttributes.class = "minor key";
  scaleKeysAttributes["data-key"] = scaleKeys[i].minor.key;
  setAttributes(textElement, scaleKeysAttributes);
  textElement.textContent = scaleKeys[i].minor.show;
  svgElement.append(textElement);
}

/* Create text element to hold scale name */
const scaleNameElement = document.createElementNS(nameSpace, "text");
setAttributes(scaleNameElement, scaleNameElementAttributes);
svgElement.append(scaleNameElement);

/* Create text element to hold scale */
const scaleElement = document.createElementNS(nameSpace, "text");
setAttributes(scaleElement, scaleElementAttributes);
svgElement.append(scaleElement);

/* Create text element to hold scale chords */
const scaleChordsElement = document.createElementNS(nameSpace, "text");
setAttributes(scaleChordsElement, scaleChordsElementAttributes);
svgElement.append(scaleChordsElement);

/* Create explanation element */
const explanationElement = document.createElement("p");
explanationElement.setAttribute("class", "explanation");
explanationElement.innerHTML = explanation;
bodyElement.append(explanationElement);
