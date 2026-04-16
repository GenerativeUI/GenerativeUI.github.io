let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 7 seconds
}





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
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();





const tricks = {
  sit: ["Hold treat near nose","Move treat up","Say Sit","Reward"],
  stay: ["Ask to sit","Show palm","Step back","Reward"],
  paw: ["Ask to sit","Lift paw","Say Paw","Reward"]
};

let currentStep = 0;
let progress = 0;
let timeLeft = 30;
let timer;
let history = [];

const trickSelect = document.getElementById("trickSelect");
const stepsList = document.getElementById("stepsList");
const stepButtonsBox = document.getElementById("stepButtons");
const progressBar = document.getElementById("progressBar");
const activityText = document.getElementById("activityText");
const moodText = document.getElementById("moodText");
const puppyEmoji = document.getElementById("puppyEmoji");
const timerBox = document.getElementById("timer");
const historyBox = document.getElementById("history");

function loadTrick() {
  clearInterval(timer);
  currentStep = 0;
  progress = 0;
  timeLeft = 30;
  updateUI();

  stepsList.innerHTML = "";
  stepButtonsBox.innerHTML = "";

  tricks[trickSelect.value].forEach((step, index) => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsList.appendChild(li);

    const btn = document.createElement("button");
    btn.textContent = step;
    btn.className = "step-btn";
    btn.onclick = () => handleStepClick(index, btn);
    stepButtonsBox.appendChild(btn);
  });

  startTimer();
}

function handleStepClick(index, btn) {
  puppyEmoji.className = "puppy";

  if (index === currentStep) {
    btn.classList.add("active");
    currentStep++;
    progress += 100 / tricks[trickSelect.value].length;
    activityText.textContent = "Puppy is learning...";
    moodText.textContent = "🙂 Happy";
    puppyEmoji.textContent = "🐕";
    puppyEmoji.classList.add("trying");
  } else {
    activityText.textContent = "Puppy is confused!";
    moodText.textContent = "😢 Unhappy";
    puppyEmoji.textContent = "🐕‍🦺";
    puppyEmoji.classList.add("confused");
    return;
  }

  if (currentStep === tricks[trickSelect.value].length) {
    activityText.textContent = "Puppy performs the trick!";
    moodText.textContent = "😄 Very Happy!";
    puppyEmoji.textContent = "🐶🎉";
    puppyEmoji.classList.add("happy");
    saveHistory();
  }

  updateUI();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerBox.textContent = "⏱ " + timeLeft + "s";
    if (timeLeft <= 0) clearInterval(timer);
  }, 1000);
}

function updateUI() {
  progressBar.style.width = progress + "%";
}

function saveHistory() {
  history.unshift(`${trickSelect.value.toUpperCase()} – ${Math.round(progress)}%`);
  historyBox.innerHTML = history.slice(0,5).map(h => `<div>🐾 ${h}</div>`).join("");
}

trickSelect.addEventListener("change", loadTrick);
loadTrick();