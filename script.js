const TOTAL_SPOTS = 5;
const API_CALL = "https://script.google.com/macros/s/AKfycbySherOi57uyXCH-8ZuTxBz38IAJIzVrVFxfLeaenzT8CXrxzqE9GwIUSG82K1cJyhD/exec";

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
