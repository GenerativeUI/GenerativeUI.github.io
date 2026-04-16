const ageSelect = document.getElementById("ageSelect");
const shoeSize = document.getElementById("shoeSize");
const character = document.getElementById("character");
const benefitsText = document.getElementById("benefitsText");
const resetBtn = document.getElementById("resetBtn");

// Update age-based content
function updateContent() {
  if (ageSelect.value === "kid") {
    character.src = "images/kid.png";
    benefitsText.innerHTML =
      "🧠 Boosts creativity<br>⚡ Increases playful energy<br>😊 Builds confidence through joyful movement.";
  } else {
    character.src = "images/adult.png";
    benefitsText.innerHTML =
      "💼 Enhances confidence<br>🔥 Improves motivation<br>🚶 Encourages positive daily movement.";
  }
}

// Update shoe size (image scaling)
function updateSize() {
  character.style.transform = `scale(${shoeSize.value})`;
}

// Reset everything
function resetWidget() {
  ageSelect.value = "kid";
  shoeSize.value = 1;
  character.src = "images/kid.png";
  character.style.transform = "scale(1)";
  benefitsText.innerHTML =
    "🧠 Boosts creativity<br>⚡ Increases playful energy<br>😊 Builds confidence through joyful movement.";
}

// Event listeners
ageSelect.addEventListener("change", updateContent);
shoeSize.addEventListener("input", updateSize);
resetBtn.addEventListener("click", resetWidget);

// Initial load
updateContent();


//Tabs Function
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