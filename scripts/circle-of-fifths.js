/* Get the DOM element */
const keyElements = document.querySelectorAll(".key");
const scaleElement = document.querySelector(".js-scale");
const scaleNameElement = document.querySelector(".js-scale-name");
const scaleChordsElement = document.querySelector(".js-scale-chords");

/* Global Variables */
let soundScale = [];
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
}

function clearScale() {
  scaleNameElement.innerHTML = "";
  scaleElement.innerHTML = "";
  scaleChordsElement.innerHTML = "";
}

function showScale(key, scaleType) {
  if (scaleType === "major") {
    const index = majorScales.indexOf(key, 0);
    const object = majorScaleObject[index];
    soundScale = object.pitch;

    scaleNameElement.innerHTML = `${key} - ${scaleType}`;
    scaleElement.innerHTML = object.scale;
    scaleChordsElement.innerHTML = object.chords;
  } else if (scaleType === "minor") {
    const index = minorScales.indexOf(key, 0);
    const object = minorScaleObject[index];
    soundScale = object.pitch;

    scaleNameElement.innerHTML = `${key} - ${scaleType}`;
    scaleElement.innerHTML = object.scale;
    scaleChordsElement.innerHTML = object.chords;
  }
}

function reverseScale() {
  let descending = soundScale.slice();
  descending.pop();
  descending.reverse();
  soundScale = soundScale.concat(descending);
}

function playScale() {
  const synth = new Tone.Synth().toDestination();
  if (!played) {
    reverseScale();
  }

  let delay = Tone.now();
  for (let i = 0; i < soundScale.length; i++) {
    if (i === 0) {
      delay += 0;
    } else {
      delay += 0.5;
    }
    synth.triggerAttackRelease(soundScale[i], "8n", delay);
  }
  played = true;
}
