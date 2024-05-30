/* Get the DOM element */
const keyElements = document.querySelectorAll(".key");

/* Global Variables */
let soundScale = "";
let soundChords = "";
let played = false;

/* Add event listener to keys */
keyElements.forEach((key) => {
  key.addEventListener("click", processKey);
});

/* Process key function */
function processKey(event) {
  const key = event.target.getAttribute("data-key");
  const scaleType = event.target.classList[0];
  showScale(key, scaleType);
  played = false;
  playScale();
  scaleNameElement.addEventListener("click", clearScale);
  scaleChordsElement.addEventListener("click", playChords);
}

/* Function to clear inner circle */
function clearScale() {
  scaleNameElement.innerHTML = "";
  scaleElement.innerHTML = "";
  scaleChordsElement.innerHTML = "";
}

/* Function to show the chose scale, scale name and scale chords in inner circle */
function showScale(key, scaleType) {
  if (scaleType === "major") {
    const index = majorScales.indexOf(key, 0);
    const object = majorScaleObject[index];
    soundScale = `sounds/scales/${object.sound}`;
    soundChords = `sounds/triads/${object.triads}`;

    scaleNameElement.innerHTML = `${key} - ${scaleType}`;
    scaleElement.innerHTML = object.scale;
    scaleChordsElement.innerHTML = object.chords;
  } else if (scaleType === "minor") {
    const index = minorScales.indexOf(key, 0);
    const object = minorScaleObject[index];
    soundScale = `sounds/scales/${object.sound}`;
    soundChords = `sounds/triads/${object.triads}`;

    scaleNameElement.innerHTML = `${key} - ${scaleType}`;
    scaleElement.innerHTML = object.scale;
    scaleChordsElement.innerHTML = object.chords;
  }
}

/* Function to play the chosen scale */
function playScale() {
  const player = new Tone.Player(soundScale).toDestination();
  player.autostart = true;
}

/* Function to play scale chords */
function playChords() {
  const player = new Tone.Player(soundChords).toDestination();
  player.autostart = true;
}
