/* Get the DOM element */
setTimeout(buildFunctionality, 10);

function buildFunctionality() {
  const keyElements = document.querySelectorAll(".key");

  /* Global Variables */
  let soundScale = "";
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
      soundScale = `sounds/${object.sound}`;

      scaleNameElement.innerHTML = `${key} - ${scaleType}`;
      scaleElement.innerHTML = object.scale;
      scaleChordsElement.innerHTML = object.chords;
    } else if (scaleType === "minor") {
      const index = minorScales.indexOf(key, 0);
      const object = minorScaleObject[index];
      soundScale = `sounds/${object.sound}`;

      scaleNameElement.innerHTML = `${key} - ${scaleType}`;
      scaleElement.innerHTML = object.scale;
      scaleChordsElement.innerHTML = object.chords;
    }
  }

  function playScale() {
    const player = new Tone.Player(soundScale).toDestination();
    player.autostart = true;
  }
}
