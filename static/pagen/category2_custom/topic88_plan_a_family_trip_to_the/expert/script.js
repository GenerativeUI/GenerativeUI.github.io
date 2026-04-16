
const items = document.querySelectorAll('.timeline-item, .card');
const reveal = () => { const trigger = window.innerHeight * 0.9; items.forEach(el => { const top = el.getBoundingClientRect().top; if (top < trigger) { el.style.opacity = 1; } }); };
window.addEventListener('scroll', reveal);
reveal();


// timeline

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const icon = document.querySelector('.menu-toggle .icon');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  if (navLinks.classList.contains('active')) {
    icon.textContent = '✕'; // close icon
  } else {
    icon.textContent = '☰'; // hamburger icon
  }
});

// header menu


document.getElementById("scrollDown").addEventListener("click", () => {
  const currentSection = document.getElementById("scrollDown").closest("section");
  const nextSection = currentSection?.nextElementSibling;

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
});
// scroll down


/* ===========================
   CARD ANIMATION
=========================== */
const cards = document.querySelectorAll(".info-card");
const itineraryItems = document.querySelectorAll(".timeline-item");

const cardObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        cardObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.25 }
);

cards.forEach(card => cardObserver.observe(card));

/* ===========================
   ITINERARY TIMELINE ANIMATION
=========================== */
const itineraryObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        itineraryObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

itineraryItems.forEach(item => itineraryObserver.observe(item));

// tab switching
document.addEventListener("DOMContentLoaded", () => {

  const tabs = document.querySelectorAll(".tab");
  let isAnimating = false;

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {

      if (tab.classList.contains("active") || isAnimating) return;

      const targetId = tab.dataset.day;
      const nextContent = document.getElementById(targetId);
      const activeContent = document.querySelector(".day-content.active");

      if (!nextContent || !activeContent) return;

      isAnimating = true;

      // Update tab state
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Fade out current content
      activeContent.classList.add("fade-out");

      setTimeout(() => {
        activeContent.classList.remove("active", "fade-out");
        nextContent.classList.add("active");

        // Refresh Slick safely
        if (window.jQuery && $('.image-slider').hasClass('slick-initialized')) {
          $('.image-slider').slick('setPosition');
        }

        isAnimating = false;
      }, 300);

    });
  });

});




// view-more and read less
document.querySelectorAll(".read-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".hotel-info");
    card.classList.toggle("expanded");

    btn.textContent = card.classList.contains("expanded")
      ? "Read less"
      : "Read more";
  });
});


// lightbox
document.querySelectorAll(".image-slider img").forEach(img => {
  img.addEventListener("click", () => {
    const lb = document.getElementById("lightbox");
    lb.querySelector("img").src = img.src;
    lb.style.display = "flex";
  });
});

document.getElementById("lightbox").addEventListener("click", () => {
  document.getElementById("lightbox").style.display = "none";
});


// images
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const slider = entry.target.querySelector(".image-slider");
      if (slider && $(slider).hasClass('slick-initialized')) {
        $(slider).slick('slickNext');
      }
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll(".day-info").forEach(section => {
  observer.observe(section);
});


// packing modal
  function openPackingModal() {
    document.getElementById("packingModal").classList.add("active");
    document.body.style.overflow = "hidden"; // prevent background scroll
  }

  function closePackingModal() {
    document.getElementById("packingModal").classList.remove("active");
    document.body.style.overflow = "";
  }