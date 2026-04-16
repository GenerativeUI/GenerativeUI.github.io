
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

// blog
$('.blog-grid').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});

// modal open

const blogs = document.querySelectorAll('.blogs');
const overlay = document.querySelector('.blog-modal-overlay');
const modals = document.querySelectorAll('.blog-modal');

blogs.forEach(blog => {
    blog.addEventListener('click', () => {
        const modalId = blog.dataset.modal;
        overlay.style.display = 'flex';
        document.getElementById(modalId).style.display = 'block';
    });
});

overlay.addEventListener('click', e => {
    if (e.target === overlay || e.target.classList.contains('modal-close')) {
        overlay.style.display = 'none';
        modals.forEach(m => m.style.display = 'none');
    }
});