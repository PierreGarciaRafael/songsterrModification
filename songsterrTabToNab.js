const saxNotes = [
    "c","c#",
    "d","d#",
    "e",
    "f","f#",
    "g","g#",
    "a","a#",
    "b"
];
const fretNotation = new RegExp(/[0-9]+/);
const lineClassName = "Cw81bf";
const fretClassName = "h81p9 h8e1";
const tuningClassName = "D38xz";
function noteToHalfTone(note) {
  return saxNotes.findIndex((e) => e == note.toLowerCase());
}
function froteNoOctave(halfTone) {
  return saxNotes[halfTone % 12];
}
function toFrote(halfTone, over12) {
  if (over12) return froteNoOctave(halfTone).toUpperCase();
  return froteNoOctave(halfTone);
}
function getTuning(line) {
  const tuners = line.getElementsByClassName(tuningClassName);
  toRet = [];
  for (var stringId = 0; stringId < tuners.length; stringId += 1) {
    toRet.push(noteToHalfTone(tuners[stringId].textContent));
  }
  return toRet;
}
function getFretString(fret, tuning) {
  return tuning[fret.getAttribute("y") / 12];
}
const tabLine = document.getElementsByClassName(lineClassName);
const tuning = getTuning(tabLine[0]);
for (var lineIdx = 0; lineIdx < tabLine.length; lineIdx += 1) {
  const frets = tabLine[lineIdx].getElementsByClassName(fretClassName);
  for (var fretIdx = 0; fretIdx < frets.length; fretIdx += 1) {
    const fretRead = frets[fretIdx].textContent.match(fretNotation);
    if (!fretRead) continue;
    const fretNb = Number(fretRead);
    const stringNote = getFretString(frets[fretIdx], tuning);
    frets[fretIdx].textContent = frets[fretIdx].textContent.replace(
      fretNotation,
      toFrote(fretNb + stringNote, fretNb >= 12)
    );
  }
}
