
function showVariety(i){
  document.querySelectorAll('.tab').forEach((t,idx)=>{
    t.classList.toggle('active',idx===i)
  })
  document.querySelectorAll('.variety-card').forEach((c,idx)=>{
    c.classList.toggle('active',idx===i)
  })
}

function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}





const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {

    // close all others
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove('active');
    });

    // toggle current
    item.classList.toggle('active');
  });
});




