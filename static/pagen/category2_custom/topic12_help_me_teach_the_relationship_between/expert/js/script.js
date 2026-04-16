const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');
const slider = document.getElementById('ageSlider');
const ageValue = document.getElementById('ageValue');
const puppy = document.getElementById('puppy');
const text = document.getElementById('growthText');

function growth(x){
  return 0.02*x*x - 0.0003*x*x*x + 10;
}

function slope(x){
  return 0.04*x - 0.0009*x*x;
}

function draw(age){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.beginPath();
  ctx.moveTo(40,300);
  ctx.lineTo(460,300);
  ctx.moveTo(40,300);
  ctx.lineTo(40,40);
  ctx.strokeStyle="#ccc";
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle="#ff914d";
  ctx.lineWidth=3;
  for(let x=1;x<=52;x++){
    let px=40+x*8;
    let py=300-growth(x)*3;
    if(x===1) ctx.moveTo(px,py);
    else ctx.lineTo(px,py);
  }
  ctx.stroke();

  let s=slope(age);
  let y=growth(age);

  ctx.beginPath();
  ctx.strokeStyle="#2d1f1d";
  for(let d=-15;d<=15;d++){
    let px=40+(age+d)*8;
    let py=300-(y+s*d)*3;
    if(d===-15) ctx.moveTo(px,py);
    else ctx.lineTo(px,py);
  }
  ctx.stroke();

  ageValue.textContent=age;

  let scale=1 + age/80;
  puppy.style.transform=`scale(${scale})`;

  text.textContent = s > 0.10 ? "Growing fast! 🐕💨" : "Growing slowly 🐾";
}

slider.addEventListener('input',()=>draw(Number(slider.value)));
draw(Number(slider.value));

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
