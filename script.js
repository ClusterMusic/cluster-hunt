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
    window.location.href = "CLUSTERRRRRR.html";
  }
}

const launchDate = new Date('2026-01-10T00:00:00Z');

function updateCountdown() {
  const now = new Date();
  const timeDiff = launchDate - now;
  

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);
  document.getElementById('days').innerText = String(days).padStart(2, '0');
  document.getElementById('hours').innerText = String(hours).padStart(2, '0');
  document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
  document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}