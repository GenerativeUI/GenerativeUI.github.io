// ============================
// Scroll Animations
// ============================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

const animatedElements = document.querySelectorAll(
  '.timeline-item, .making-content, .feature-card, .gallery-grid img, .fact-card, .testimonial-card'
);
animatedElements.forEach(el => observer.observe(el));


// ============================
// Smooth Scroll for Navbar Links
// ============================
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Close mobile nav if open
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
    }
  });
});


// ============================
// Active Section Highlight
// ============================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 200; // offset for sticky header

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll('.nav-links li a').forEach(link => {
        link.classList.remove('active');
      });
      const activeLink = document.querySelector(`.nav-links li a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});


// ============================
// Mobile Navbar Toggle
// ============================
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const body = document.body;

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('active');

  // toggle body class
  body.classList.toggle('menu-open', isOpen);

  // change icon
  menuToggle.textContent = isOpen ? '✖' : '☰';
});




/* ================= NAV TOGGLE ================= */
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
toggle.onclick = () => links.classList.toggle('show');

/* ================= INTERACTIVE CUBE ================= */
const cube = document.getElementById("cube");

let isDragging = false;
let startX, startY;
let rotateX = -20;
let rotateY = 20;

/* APPLY INITIAL ROTATION */
cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

/* ---------- DESKTOP ---------- */
cube.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  rotateY += (e.clientX - startX) * 0.4;
  rotateX -= (e.clientY - startY) * 0.4;
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  startX = e.clientX;
  startY = e.clientY;
});

/* ---------- MOBILE (TOUCH) ---------- */
cube.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

cube.addEventListener("touchend", () => {
  isDragging = false;
});

cube.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  e.preventDefault(); // stop page scroll
  rotateY += (e.touches[0].clientX - startX) * 0.4;
  rotateX -= (e.touches[0].clientY - startY) * 0.4;
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});







/* ===================== */
/* VISUAL PART HIGHLIGHT */
/* ===================== */

const title = document.getElementById("visual-title");
const text = document.getElementById("visual-text");

const parts = {
  center: {
    ids: ["center1", "center2", "center3", "center4"],
    title: "Center Pieces",
    text: "Center pieces define the color of each face and remain fixed in position. They determine the cube’s orientation and never move relative to one another."
  },
  edge: {
    ids: ["edge1", "edge2", "edge3", "edge4"],
    title: "Edge Pieces",
    text: "Edge pieces are located between two center pieces and display two colors. They move around the cube during rotations and must be correctly aligned to solve each face."
  },
  corner: {
    ids: ["corner1", "corner2", "corner3", "corner4"],
    title: "Corner Pieces",
    text: "Corner pieces sit at the cube’s corners and have three colors. They can change position and orientation, making them key to completing the final steps of a solution."
  },
  core: {
    ids: ["core"],
    title: "Core Mechanism",
    text: "The core mechanism is the internal structure that holds all pieces together. It allows smooth rotation of layers while maintaining the cube’s stability and alignment."
  }
};

function clearHighlights() {
  document.querySelectorAll(".cube-svg rect, .cube-svg circle")
    .forEach(el => el.classList.remove("highlight"));
}

document.querySelectorAll(".visual-controls button").forEach(btn => {
  btn.addEventListener("click", () => {
    clearHighlights();
    const part = parts[btn.dataset.part];
    part.ids.forEach(id => {
      document.getElementById(id).classList.add("highlight");
    });
    title.textContent = part.title;
    text.textContent = part.text;
  });
});




document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("tryCubeBtn");
  const cubeContainer = document.getElementById("miniCubeContainer");

  // Create cube only once
  if (!document.getElementById("miniCube")) {
    const cube = document.createElement("div");
    cube.id = "miniCube";

    cube.innerHTML = `
      <div class="front"></div>
      <div class="back"></div>
      <div class="right"></div>
      <div class="left"></div>
      <div class="top"></div>
      <div class="bottom"></div>
    `;

    cubeContainer.appendChild(cube);
  }

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    // Show cube
    cubeContainer.style.display = "block";

    // Small pop animation
    cubeContainer.style.transform = "scale(0.8)";
    cubeContainer.style.opacity = "0";

    setTimeout(() => {
      cubeContainer.style.transition = "all 0.4s ease";
      cubeContainer.style.transform = "scale(1)";
      cubeContainer.style.opacity = "1";
    }, 50);

    // Scroll to cube smoothly
    cubeContainer.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });

});




(function () {

  const colors = [
    "rm-red", "rm-blue", "rm-green",
    "rm-yellow", "rm-orange", "rm-white"
  ];

  const board = document.getElementById("rubikMatchBoard");
  const msg = document.getElementById("rubikMatchMessage");

  let tiles = [];

  function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function createBoard() {
    board.innerHTML = "";
    tiles = [];
    msg.textContent = "";

    for (let i = 0; i < 9; i++) {
      const tile = document.createElement("div");
      tile.classList.add("rubik-match-tile", randomColor());

      tile.addEventListener("click", () => {
        tile.className = "rubik-match-tile " + randomColor();
        checkWin();
      });

      board.appendChild(tile);
      tiles.push(tile);
    }
  }

  function checkWin() {
    const first = tiles[0].classList[1];
    const solved = tiles.every(t => t.classList[1] === first);

    if (solved) {
      msg.textContent = "🎉 Cube Face Solved!";
    }
  }

  document.getElementById("rubikMatchShuffle").onclick = createBoard;
  document.getElementById("rubikMatchReset").onclick = createBoard;

  createBoard();

})();
