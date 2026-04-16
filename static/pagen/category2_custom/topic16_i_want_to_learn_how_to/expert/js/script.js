/* =========================
   HANDSTAND WIDGET SCRIPT
========================= */

let currentStep = 0;
const totalSteps = 4;
let trainingCompleted = false;

const messages = [
  "Great! Warm up completed 💪",
  "Nice! Hands are placed correctly ✋",
  "Awesome! Kick up gently 🚀",
  "Perfect! Hold steady and breathe 🧘"
];

function doStep(step) {
  if (trainingCompleted) return;
  if (step !== currentStep) return;

  currentStep++;

  document.getElementById("stepMessage").innerText = messages[step];
  document.getElementById("progressBar").style.width =
    (currentStep / totalSteps) * 100 + "%";

  if (currentStep === totalSteps) {
    completeHandstand();
  }
}

function completeHandstand() {
  trainingCompleted = true;

  const mode = document.getElementById("modeSelect").value;
  const kid = document.getElementById("kid");

  kid.classList.remove("thinking");
  kid.src = "images/kid_handstand.png";

  if (mode === "wall") {
    kid.classList.add("wall-handstand");
    document.getElementById("statusText").innerText =
      "Wall-supported handstand achieved 🧱";
  } else {
    kid.classList.add("free-handstand", "balance");
    document.getElementById("statusText").innerText =
      "Free balance handstand! Amazing 🤸‍♂️";
  }

  document.getElementById("stepMessage").innerText =
    "🎉 Training completed! You can reset and try again.";
}

/* =========================
   RESET FUNCTION
========================= */

function resetTraining() {
  currentStep = 0;
  trainingCompleted = false;

  const kid = document.getElementById("kid");

  kid.src = "images/kid_thinking.png";
  kid.className = "kid thinking";

  document.getElementById("progressBar").style.width = "0%";
  document.getElementById("stepMessage").innerText =
    "Training reset. Choose a mode and start again!";
  document.getElementById("statusText").innerText =
    "Ready to learn 🤔";
}

/* =========================
   MODE CHANGE HANDLING
========================= */

document.getElementById("modeSelect").addEventListener("change", () => {
  if (currentStep > 0 && !trainingCompleted) {
    document.getElementById("stepMessage").innerText =
      "Mode changed. Finish current steps or reset to restart.";
  }
});

/* =========================
   TABS SCRIPT (UNCHANGED)
========================= */

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
