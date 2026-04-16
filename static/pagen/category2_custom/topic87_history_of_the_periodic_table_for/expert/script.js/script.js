



function toggleMenu(){
    document.getElementById("navMenu").classList.toggle("active");
}
</script>

<script>
function scrollToHistory(){
    document.getElementById("early").scrollIntoView({
        behavior: "smooth"
    });
}



let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i){
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

function nextSlide(){
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide(){
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}




const historySteps = [
    {
        title: "Ancient Elements",
        text: "Early humans used naturally available elements like gold, copper and iron for daily life."
    },
    {
        title: "Greek Classification",
        text: "Greek philosophers believed all matter was formed from earth, water, air and fire."
    },
    {
        title: "Alchemy Period",
        text: "Alchemists developed experimental methods while searching for transformation of metals."
    },
    {
        title: "Lavoisier (1789)",
        text: "He defined elements scientifically and laid the foundation of modern chemistry."
    },
    {
        title: "Modern Periodic Table",
        text: "Elements are arranged by atomic number with clear periodic trends."
    }
];

let autoIndex = 0;

function showInfo(index){
    document.getElementById("infoPanel").innerHTML = `
        <h4>${historySteps[index].title}</h4>
        <p>${historySteps[index].text}</p>
    `;
}

// Auto-play learning (silent & smooth)
//setInterval(()=>{
   // showInfo(autoIndex);
   // autoIndex = (autoIndex + 1) % historySteps.length;
}, 5000);




const concepts = [
    {
        title:"Need of Classification",
        text:"As the number of elements increased, scientists needed a systematic way to study and compare them."
    },
    {
        title:"Atomic Mass Based Table",
        text:"Early periodic tables arranged elements by increasing atomic mass, which showed repeating properties."
    },
    {
        title:"Atomic Number Based Table",
        text:"Moseley proved that atomic number is the correct basis for periodic classification."
    },
    {
        title:"Periodic Trends",
        text:"Properties like atomic size and reactivity change periodically across periods and groups."
    },
    {
        title:"Modern Use of Periodic Table",
        text:"The periodic table is used in education, research, medicine and material science."
    }
];

function showConcept(index){
    document.getElementById("conceptInfo").innerHTML = `
        <h4>${concepts[index].title}</h4>
        <p>${concepts[index].text}</p>
    `;
}






    const paragraphs = document.querySelectorAll('#infoPanel p[data-stage]');

    function showInfo(index) {
        paragraphs.forEach(p => p.classList.remove('active')); 
        const paraToShow = document.querySelector(`#infoPanel p[data-stage="${index}"]`);
        if (paraToShow) paraToShow.classList.add('active'); // selected show
    }

    
    showInfo(0);
	
	
    const btn = document.getElementById('overviewBtn');
    const content = document.getElementById('overviewContent');

    btn.addEventListener('click', () => {
        if(content.style.display === "none"){
            content.style.display = "block";
            btn.textContent = "Hide summary";
        } else {
            content.style.display = "none";
            btn.textContent = "Quick summary";
        }
    });