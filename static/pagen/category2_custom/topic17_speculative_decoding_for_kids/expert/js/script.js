
const questions=[
 {q:"The sun rises in the ___",options:["East","West","North"],answer:0},
 {q:"We use our eyes to ___",options:["Hear","See","Taste"],answer:1},
 {q:"Fish live in ___",options:["Trees","Water","Sky"],answer:1}
];
let current=0,score=0;
const qEl=document.getElementById("question");
const btns=document.querySelectorAll(".options button");
const scoreEl=document.getElementById("score");
const starsEl=document.getElementById("stars");
const feedback=document.getElementById("feedback");

function startGame(){
 document.getElementById("game").scrollIntoView({behavior:"smooth"});
 loadQuestion()
}
function loadQuestion(){
 const q=questions[current];
 qEl.textContent=q.q;
 btns.forEach((b,i)=>b.textContent=q.options[i])
}
function selectAnswer(i){
 if(i===questions[current].answer){
  document.getElementById("correctSound").play();
  score++;scoreEl.textContent=score;
  starsEl.textContent="★".repeat(score)+"☆".repeat(3-score);
  feedback.textContent="🌟 Great Guess!";
  confetti()
 }else{
  document.getElementById("wrongSound").play();
  feedback.textContent="😊 Nice try!"
 }
 current++;
 if(current<questions.length){
  setTimeout(loadQuestion,800)
 }else{
  qEl.textContent="🎉 Game Completed!";
  feedback.textContent="You did amazing!"
 }
}
function confetti(){
 for(let i=0;i<20;i++){
  const c=document.createElement("div");
  c.className="confetti";
  c.style.left=Math.random()*100+"vw";
  document.body.appendChild(c);
  setTimeout(()=>c.remove(),2000)
 }
}


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
