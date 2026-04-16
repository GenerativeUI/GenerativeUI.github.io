const mobile=document.getElementById("mobile");
const type=document.getElementById("elementType");
const count=document.getElementById("count");
const speed=document.getElementById("speed");
let rot=0;
function build(){
  mobile.innerHTML="";
  const items={shapes:["●","■","▲"],animals:["🐻","🐰","🐘"],stars:["★","✦","✧"]};
  for(let i=0;i<count.value;i++){
    const a=(360/count.value)*i;
    const t=document.createElementNS("http://www.w3.org/2000/svg","text");
    t.textContent=items[type.value][i%3];
    t.setAttribute("y",-90);
    t.setAttribute("text-anchor","middle");
    t.setAttribute("font-size","38");
    t.setAttribute("transform",`rotate(${a})`);
    mobile.appendChild(t);
  }
}
function anim(){
  rot+=speed.value*0.1;
  mobile.setAttribute("transform",`translate(160,160) rotate(${rot})`);
  requestAnimationFrame(anim);
}
type.onchange=build;
count.oninput=build;
build();anim();

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
