const outfitSelect = document.getElementById("outfitSelect");
const optionsContainer = document.getElementById("optionsContainer");
const outfitImage = document.getElementById("outfitImage");

// Initial image state
outfitImage.style.display = "none";
outfitImage.style.opacity = "0";
outfitImage.style.transition = "opacity 0.8s ease";

const outfitData = {
  tuxedo: {
    image: "images/Tuxedos.jpg",
    options: ["Trousers", "Formal Shirt", "Waist Covering", "Formal Shoes", "Accessories"]
  },
  gown: {
    image: "images/Egown.jpg",
    options: ["Crepe", "Lace", "Organza", "Satin", "Silk"]
  },
  avant: {
    image: "images/Modeld.jpg",
    options: ["Nylon", "Technical Taffeta", "Raw Leather", "Felted Wool"]
  },
  future: {
    image: "images/FutureDress.jpg",
    options: ["Holographic Surface", "Coatings", "Reflect Light", "Sci-Fi Aesthetic"]
  }
};

outfitSelect.addEventListener("change", () => {
  const value = outfitSelect.value;

  // Reset everything
  optionsContainer.innerHTML = "";
  outfitImage.style.display = "none";
  outfitImage.style.opacity = "0";
  outfitImage.src = "";

  if (!value) return;

  const selectedOutfit = outfitData[value];
  const totalSteps = selectedOutfit.options.length;
  let currentStep = 0;

  /* ---------- Progress Text ---------- */
  const progressText = document.createElement("div");
  progressText.style.marginBottom = "12px";
  progressText.style.fontWeight = "bold";
  progressText.textContent = `Progress: 0 / ${totalSteps}`;
  optionsContainer.appendChild(progressText);

  /* ---------- Progress Bar ---------- */
  const progressBarWrap = document.createElement("div");
  progressBarWrap.style.height = "8px";
  progressBarWrap.style.background = "#333";
  progressBarWrap.style.borderRadius = "10px";
  progressBarWrap.style.marginBottom = "20px";

  const progressBar = document.createElement("div");
  progressBar.style.height = "100%";
  progressBar.style.width = "0%";
  progressBar.style.background = "#b48b2f";
  progressBar.style.borderRadius = "10px";
  progressBar.style.transition = "width 0.4s ease";

  progressBarWrap.appendChild(progressBar);
  optionsContainer.appendChild(progressBarWrap);

  /* ---------- Buttons ---------- */
  selectedOutfit.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;

    if (index !== 0) {
      btn.disabled = true;
      btn.style.opacity = "0.3";
      btn.style.cursor = "not-allowed";
    }

    btn.addEventListener("click", () => {
      if (btn.classList.contains("active")) return;

      btn.classList.add("active");
      btn.disabled = true;
      btn.style.cursor = "default";

      currentStep++;
      progressText.textContent = `Progress: ${currentStep} / ${totalSteps}`;
      progressBar.style.width = `${(currentStep / totalSteps) * 100}%`;

      // Enable next button
      const nextBtn = optionsContainer.querySelectorAll(".option-btn")[index + 1];
      if (nextBtn) {
        nextBtn.disabled = false;
        nextBtn.style.opacity = "1";
        nextBtn.style.cursor = "pointer";
      }

      // Completion
      if (currentStep === totalSteps) {
        outfitImage.src = selectedOutfit.image;
        outfitImage.style.display = "block";

        setTimeout(() => {
          outfitImage.style.opacity = "1";
        }, 100);

        completeBadge.style.display = "block";
      }
    });

    optionsContainer.appendChild(btn);
  });

  /* ---------- Completion Badge ---------- */
  const completeBadge = document.createElement("div");
  completeBadge.textContent = "✔ Outfit Complete";
  completeBadge.style.marginTop = "20px";
  completeBadge.style.fontWeight = "bold";
  completeBadge.style.color = "#b48b2f";
  completeBadge.style.display = "none";
  optionsContainer.appendChild(completeBadge);

  /* ---------- Reset Button ---------- */
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "Reset Outfit";
  resetBtn.style.marginTop = "25px";
  resetBtn.style.padding = "10px 18px";
  resetBtn.style.borderRadius = "20px";
  resetBtn.style.border = "2px solid #b48b2f";
  resetBtn.style.background = "transparent";
  resetBtn.style.color = "#fff";
  resetBtn.style.cursor = "pointer";

  resetBtn.addEventListener("click", () => {
    outfitSelect.value = "";
    optionsContainer.innerHTML = "";
    outfitImage.style.display = "none";
    outfitImage.style.opacity = "0";
    outfitImage.src = "";
  });

  optionsContainer.appendChild(resetBtn);
});


/************* Tabs *****************/

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



/* -------------- Top Slider ----------------*/

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
