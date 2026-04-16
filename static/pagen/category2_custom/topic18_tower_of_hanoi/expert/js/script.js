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






let moves=0, time=0, timerInt, dragged=null, diskCount=3;

const moveSound = document.getElementById("moveSound");
const winSound = document.getElementById("winSound");

function startGame() {
  diskCount = parseInt(document.getElementById("level").value);
  clearInterval(timerInt);
  time=0; moves=0;
  updateUI();
  document.querySelectorAll('.tower').forEach(t=>t.innerHTML='');
  for(let i=diskCount;i>=1;i--) {
    const d=document.createElement('div');
    d.className='disk';
    d.style.width=(30+i*15)+'px';
    d.style.background=['#f77043','#ef6ca5','#13b674','#00c3c4','#7351ee'][i%5];
    d.draggable=true;
    d.ondragstart=()=>dragged=d;
    document.querySelector('.tower').appendChild(d);
  }
  timerInt=setInterval(()=>{time++; updateUI();},1000);
}

document.querySelectorAll('.tower').forEach(tower=>{
  tower.ondragover=e=>e.preventDefault();
  tower.ondrop=()=>{
    if(!dragged) return;
    const top=tower.lastElementChild;
    if(!top || top.offsetWidth>dragged.offsetWidth) {
      tower.appendChild(dragged);
      moves++; moveSound.play();
      updateUI(); checkWin();
    }
  };
});

function updateUI() {
  document.getElementById("moves").innerText="Moves: "+moves;
  document.getElementById("timer").innerText="Time: "+time+"s";
  document.getElementById("stars").innerText = moves<=(2**diskCount)?"⭐ ⭐ ⭐":moves<=2**diskCount+5?"⭐ ⭐":"⭐";
}

function checkWin() {
  if(document.querySelectorAll('.tower')[2].children.length===diskCount) {
    clearInterval(timerInt);
    winSound.play();
    alert("🎉 You Win!");
  }
}

function autoSolve() {
  alert("🤖 Auto-solve demo is a visual helper for kids. Try solving manually for best learning!");
}

startGame();
