const TOTAL_SPOTS = 5;
const API_CALL = "https://script.google.com/macros/s/AKfycbyiDmc7XBl8cS4B6t0SqL-w2FqaUoci6VAdWaxmJxAGlCQ-X3v5i1fESpWVapcsyQYz/exec";

function markVisited(spotId) {
  let progress = JSON.parse(localStorage.getItem("visitedSpots") || "{}");
  progress[spotId] = true;
  localStorage.setItem("visitedSpots", JSON.stringify(progress));
}

function allSpotsVisited() {
  let progress = JSON.parse(localStorage.getItem("visitedSpots") || "{}");
  return Object.keys(progress).length >= TOTAL_SPOTS;
}

function checkCompletion() {
  if (allSpotsVisited()) {
    window.location.href = "complete.html";
  }
}
