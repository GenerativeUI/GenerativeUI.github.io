const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const nav = document.querySelector('nav.nav-links');

menuBtn.addEventListener('click', () => {
  nav.classList.add('active');  
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');     
});

  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {

      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));

      button.classList.add("active");
      document.getElementById(button.dataset.book).classList.add("active");
    });
  });


  $(document).ready(function () {
    $(".life-images.slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2500,
      dots: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });


  $(document).ready(function(){
    function checkWidth(){
      if($(window).width() <= 749){
        $('.book-tabs').addClass('slider');
      } else{
        $('.book-tabs').removeClass('slider');
      }
    }
    checkWidth();
    $(window).on('resize', checkWidth);
  });


$(document).ready(function () {
  $(".book-tabs.slider").slick({
    slidesToShow:1.5,
    slidesToScroll:1,
    autoplay: false,
    dots:false,
    arrows:false,

    draggable: true,        // mouse drag enable
    swipe: true,            // touch + mouse swipe
    touchMove: true,
    swipeToSlide: true,     // ek swipe me multiple slides
    speed: 600,             // smooth animation
    cssEase: 'ease', // smoothness
    infinite: false         // natural end feel (optional)
  });
});