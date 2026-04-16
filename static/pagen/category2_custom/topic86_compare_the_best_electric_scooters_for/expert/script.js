
    const faqItems = document.querySelectorAll(".question-text");

    faqItems.forEach(item => {
        const clickable = item.querySelector(".question-texts");
        const answer = item.querySelector(".faq-answer");

        clickable.addEventListener("click", () => {
            // Close other items
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove("active");
                    i.querySelector(".faq-answer").style.maxHeight = null;
                }
            });

            // Toggle current item
            if (item.classList.contains("active")) {
                item.classList.remove("active");
                answer.style.maxHeight = null;
            } else {
                item.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
	
	
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".why-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 150);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach(card => observer.observe(card));
});

	
	
	
	
	
	
	
	

