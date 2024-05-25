/* Major Scale */
const majorScales = [
  "C",
  "G",
  "D",
  "A",
  "E",
  "B",
  "Gb",
  "Db",
  "Ab",
  "Eb",
  "Bb",
  "F",
];

/* Minor Scales */
const minorScales = [
  "A",
  "E",
  "B",
  "F#",
  "C#",
  "G#",
  "Eb",
  "Bb",
  "F",
  "C",
  "G",
  "D",
];

const majorScaleObject = [
  {
    key: "C",
    pitch: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
    scale: "C D E F G A B C",
    chords: "C Dm Em F G Am B°",
  },

  {
    key: "G",
    pitch: ["G3", "A3", "B3", "C4", "D4", "E4", "F#4", "G4"],
    scale: "G A B C D E F♯ G",
    chords: "G Am Bm C D Em F♯°",
  },
  {
    key: "D",
    pitch: ["D4", "E4", "F#4", "G4", "A4", "B4", "C#5", "D5"],
    scale: "D E F♯ G A B C♯ D",
    chords: "D Em F#m G A Bm C°",
  },
  {
    key: "A",
    pitch: ["A3", "B3", "C#4", "D4", "E4", "F#4", "G#4", "A4"],
    scale: "A B C♯ D E F♯ G♯ A",
    chords: "A Bm C♯m D E F♯m G♯°",
  },
  {
    key: "E",
    pitch: ["E4", "F#4", "G#4", "A4", "B4", "C#5", "D#5", "E5"],
    scale: "E F♯ G♯ A B C♯ D♯ E",
    chords: "E F♯m G♯m A B C♯m D♯°",
  },
  {
    key: "B",
    pitch: ["B3", "C#4", "D#4", "E4", "F#4", "G#4", "A#4", "B4"],
    scale: "B C♯ D♯ E F♯ G♯ A♯ B",
    chords: "B C♯m D♯m E F♯ Gm A♯°",
  },
  {
    key: "Gb",
    pitch: ["Gb3", "Ab3", "Bb3", "Cb4", "Db4", "Eb4", "F4", "Gb4"],
    scale: "G♭ A♭ B♭ C♭ D♭ E♭ F G♭",
    chords: "G♭ A♭m B♭m C♭ D♭ E♭m F°",
  },
  {
    key: "Db",
    pitch: ["Db4", "Eb4", "F4", "Gb4", "Ab4", "Bb4", "C5", "Db5"],
    scale: "D♭ E♭ F G♭ A♭ B♭ C♭ D♭",
    chords: "D♭ E♭m Fm G♭ A♭ B♭m C♭°",
  },
  {
    key: "Ab",
    picth: ["Ab3", "Bb3", "C4", "Db4", "Eb4", "F4", "G4", "Ab4"],
    scale: "A♭ B♭ C D♭ E♭ F G A♭",
    chords: "A♭ B♭m Cm D♭ E♭ Fm G°",
  },
  {
    key: "Eb",
    pitch: ["Eb4", "F4", "G4", "Ab4", "Bb4", "C5", "D5", "Eb5"],
    scale: "E♭ F G A♭ B♭ C D E♭",
    chords: "E♭ Fm Gm A♭ B♭ Cm D°",
  },
  {
    key: "Bb",
    pitch: ["Bb3", "C4", "D4", "Eb4", "F4", "G4", "A4", "Bb4"],
    scale: "B♭ C D E♭ F G A B♭",
    chords: "B♭ Cm Dm E♭ F G A°",
  },
  {
    key: "F",
    pitch: ["F3", "G3", "A3", "Bb3", "C4", "D4", "E4", "F4"],
    scale: "F G A B♭ C D E F",
    chords: "F Gm Am B♭ C Dm E F",
  },
];

const minorScaleObject = [
  {
    key: "A",

    pitch: ["A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4"],
    scale: "A B C D E F G A",
    chords: "A B° C Dm Em F G",
  },
  {
    key: "E",

    pitch: ["E4", "F#4", "G4", "A4", "B4", "C5", "D5", "E5"],
    scale: "E F♯ G A B C♯ D E",
    chords: "E F♯° G Am Bm C D",
  },
  {
    key: "B",
    pitch: ["B3", "C#4", "D4", "E4", "F#4", "G4", "A4", "B4"],
    scale: "B C♯ D E F♯ G A B",
    chords: "B C♯° D Em F♯m G A",
  },
  {
    key: "F#",

    pitch: ["F#3", "G#3", "A3", "B3", "C#4", "D4", "E4", "F#4"],
    scale: "F♯ G♯ A B C♯ D E F♯",
    chords: "F♯ G♯° A Bm C♯m D E",
  },
  {
    key: "C#",
    pitch: ["C#4", "D#4", "E4", "F#4", "G#4", "A4", "B4", "C#5"],
    scale: "C♯ D♯ E F♯ G♯ A B C♯",
    chords: "C♯m D♯° E F♯m G♯m A B",
  },
  {
    key: "G#",
    pitch: ["G#3", "A#3", "B3", "C#4", "D#4", "E4", "F#4", "G#4"],
    scale: "G♯ A♯ B C♯ D♯ E F♯ G♯",
    chords: "G♯m A♯° B C♯m D♯m E F♯",
  },

  {
    key: "Eb",
    pitch: ["Eb4", "F4", "Gb4", "Ab4", "Bb4", "Cb5", "Db5", "Eb5"],
    scale: "E♭ F G♭ A♭ B♭ C♭ D♭ E♭ ",
    chords: "E♭ F° G♭ A♭ B♭m C♭ D♭",
  },
  {
    key: "Bb",

    pitch: ["Bb3", "C4", "Db4", "Eb4", "F4", "Gb4", "Ab4", "Bb4"],
    scale: "B♭ C D♭ E♭ F G♭ A♭ B♭",
    chords: "B♭m C° D♭ E♭m Fm G♭ A♭",
  },
  {
    key: "F",
    pitch: ["F3", "Gb3", "Ab3", "Bb3", "C4", "Db4", "Eb4", "F4"],
    scale: "F G A♭ B♭ C D♭ E♭ F",
    chords: "Fm G° A♭ B♭m Cm D♭ E♭",
  },
  {
    key: "C",
    pitch: ["C4", "D4", "E4", "F#4", "G#4", "A4", "B4", "C#5"],
    scale: "C♯ D♯ E♭ F G A♭ B♭ C",
    chords: "C♯m D° E Fm Gm A♭ B♭",
  },
  {
    key: "G",
    pitch: ["G3", "A3", "B3", "C#4", "D#4", "E4", "F#4", "G#4"],
    scale: "G A B♭ C D E♭ F G",
    chords: "G♯m A° B♭ Cm Dm E♭ F",
  },
  {
    key: "D",
    pitch: ["D4", "E4", "F4", "G4", "A4", "Bb4", "C5", "D5"],
    scale: "D E F G A B C D",
    chords: "D E° F Gm Am B♭ C",
  },
];
