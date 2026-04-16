function checkDough() {
  const flour = +document.getElementById("flour").value;
  const water = +document.getElementById("water").value;
  const yeast = +document.getElementById("yeast").value;
  const oil   = +document.getElementById("oil").value;

  const dough = document.getElementById("dough");
  const doughText = document.getElementById("doughText");
  const chef = document.getElementById("chef");
  const chefText = document.getElementById("chefText");

  const score = (flour * 2) + (water * 2) + (yeast * 3) + oil;

  // Reset
  dough.style.transform = "scale(0)";
  chef.style.transform = "scale(1)";

  if (score >= 15 && score <= 20) {
    dough.style.transform = "scale(1.2)";
    chef.innerHTML = "😄";
    chef.style.transform = "scale(1.2)";
    doughText.innerHTML = "Perfect dough! Soft and fluffy 🍞";
    chefText.innerHTML = "Great job! The chef is happy!";
  } 
  else if (score < 15) {
    chef.innerHTML = "😕";
    doughText.innerHTML = "Not ready yet...";
    chefText.innerHTML = "Too dry! Add more water 💧";
  } 
  else {
    chef.innerHTML = "😢";
    doughText.innerHTML = "Oops! Something went wrong";
    chefText.innerHTML = "Too sticky! Add more flour 🌾";
  }
}

const ovenSlider = document.getElementById("ovenTemp");
const ovenText = document.getElementById("ovenTempText");

ovenSlider.addEventListener("input", () => {
  const temp = ovenSlider.value;

  if (temp >= 220 && temp <= 250) {
    ovenText.innerHTML = `${temp}°C — Perfect for pizza 🍕`;
  } else if (temp < 220) {
    ovenText.innerHTML = `${temp}°C — Too cold ❄️`;
  } else {
    ovenText.innerHTML = `${temp}°C — Too hot 🔥`;
  }
});



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