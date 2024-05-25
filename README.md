# 1. Render Circle of Fifths

In music theory, the circle of fifths is a way of organizing pitches as a sequence of perfect fifths. Starting on a C, and using the standard system of tuning for Western music (12-tone equal temperament), the sequence is: C, G, D, A, E, B, F♯ (G♭), C♯ (D♭), G♯ (A♭), D♯ (E♭), A♯ (B♭), E♯ (F), C. This order places the most closely related key signatures adjacent to one another. (source: [wikipedia](https://en.wikipedia.org/wiki/Circle_of_fifths)) It is usually illustrated in the form of a circle.

The second part of the project is to add functionality to the circle of fifths using pure javascript. Also css is used in this part of the project.

# 2. Requirements

In this part of the project tone.js is used to play the chosen scale. There are no further requirements or packages needed.

# 3. Structure

## 3.1 index.html

The project consists of a index.html file with only one div element. In this element the contents of the circle-of-fifths.svg, which was created by copying the svg element in the first part of the project with Chrome DevTools, is added to this div element. This makes the svg inline. I experimented with the html object element to load the svg file, but run into errors which to this day I cannot explain. I also included a html p element to show how the functionalities created by the circle-of-fifths.js script can de used.

## 3.2 scale-object.js

The scale-object.js, which is contained in the script folder, holds four array variables:

- majorScale, holding the twelve major keys
- minorScale, holding the twelve natural minor keys
- majorScaleObject, holding twelve objects for the major keys
- minorScaleObject, holding twelve objects for the minor keys

Below an example of the majorScale object

```
const majorScaleObject = [
  {
    key: "C",
    pitch: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
    scale: "C D E F G A B C",
    chords: "C Dm Em F G Am B°",
  },
  ...
]
```

The example shows the C major key, the pitches used by tone.js, the scale and the scale chords (triads) to be shown belonging to the scale. See below image.

![C Major Scale](images/c-major-scale.png)

# 3.3 circle-of-fifths.js

The script adds a click event listener to each of the keys by looping through node list created by the document.querySelectorAll method collecting all element with the class "key". When a major or minor key is clicked the processKey function is called. This function looks for data-key attribute value of the element and class "major" or "minor".

With those two values as paraments the showScale function is called. This function looks for the index of the key chosen in the majorScale or minorScale array. The index retrieved is then used to retrieve the object contained in the majorScaleObject or minorScaleObject. From the retrieved object the value of the keys "pitch", "scale" and "chords" is retrieved.

The scale name, the scale and the scale chords are shown in the inner circle and the sacale is played in ascending and descending order.

The end result looks like this.

![Circle of Fifths Screenshot](images/screenshot-500x294.png)

# 4. License

Copyright 2024 Ebel Magnin

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
