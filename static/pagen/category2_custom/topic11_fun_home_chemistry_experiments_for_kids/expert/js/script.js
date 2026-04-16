
// Simple interactive chemistry simulator with animated bubbles and sound using Web Audio API
document.addEventListener('DOMContentLoaded', function(){
  const mixBtn = document.getElementById('mixBtn');
  const chem1 = document.getElementById('chem1');
  const chem2 = document.getElementById('chem2');
  const qty1 = document.getElementById('qty1');
  const qty2 = document.getElementById('qty2');
  const result = document.getElementById('result');
  const liquid = document.getElementById('liquid');
  const bubbles = document.getElementById('bubbles');

  // create audio context for a bubbly sound
  let audioCtx = null;
  function playBubbleSound(intensity=0.5){
    try{
      if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = 'sine';
      o.frequency.value = 500 - (intensity*300);
      g.gain.value = 0.02 + (intensity*0.03);
      o.connect(g);
      g.connect(audioCtx.destination);
      o.start();
      setTimeout(()=>{ o.stop(); }, 180 + intensity*300);
    }catch(e){
      // audio not supported
    }
  }

  function clearBubbles(){
    bubbles.innerHTML = '';
  }
  function createBubbles(count, color){
    clearBubbles();
    for(let i=0;i<count;i++){
      const b = document.createElement('span');
      b.className = 'bubble';
      b.style.left = Math.random()*85 + '%';
      b.style.bottom = (Math.random()*10) + 'px';
      b.style.width = (6 + Math.random()*20) + 'px';
      b.style.height = b.style.width;
      b.style.background = color || 'rgba(255,255,255,0.8)';
      b.style.borderRadius = '50%';
      b.style.position = 'absolute';
      b.style.opacity = 0.9;
      b.style.animation = 'rise ' + (2 + Math.random()*2) + 's ease-in forwards';
      bubbles.appendChild(b);
    }
  }

  function mixChemicals(){
    const c1 = chem1.value;
    const c2 = chem2.value;
    const q1 = parseInt(qty1.value,10);
    const q2 = parseInt(qty2.value,10);
    const total = q1+q2;
    let message = '🧪 Nothing unusual happens. Try another combination!';
    let height = Math.min(95, 10 + total*6); // liquid height %
    let color = 'linear-gradient(180deg,#00c2ff,#0066ff)';
    let bubbleCount = 0;
    let intensity = 0.2;

    // common reactions
    if ((c1 === 'baking' && c2 === 'vinegar') || (c1 === 'vinegar' && c2 === 'baking')) {
      message = '💥 Huge Fizz! Vinegar reacts with baking soda and creates CO₂ bubbles!';
      color = 'linear-gradient(180deg,#ff9a76,#ff4d4d)';
      bubbleCount = Math.min(40, total*6);
      intensity = 0.9;
    } else if ((c1 === 'baking' && c2 === 'lemon') || (c1 === 'lemon' && c2 === 'baking')) {
      message = '✨ Medium fizz! Lemon juice (acid) reacts with baking soda.';
      color = 'linear-gradient(180deg,#ffd27a,#ff9a2e)';
      bubbleCount = Math.min(30, total*5);
      intensity = 0.7;
    } else if ((c1 === 'water' && c2 === 'color') || (c1 === 'color' && c2 === 'water')) {
      message = '🎨 Color spreads beautifully in water — great for art and learning about mixing!';
      color = 'linear-gradient(180deg,#a2ffea,#6fe7c6)';
      bubbleCount = Math.min(6, total);
      intensity = 0.2;
    } else if ((c1 === 'oil' && c2 === 'water') || (c1 === 'water' && c2 === 'oil')) {
      message = '⚠ Oil and water don’t mix — they separate into layers.';
      color = 'linear-gradient(180deg,#fff2b2,#ffd27a)';
      bubbleCount = 0;
      intensity = 0.1;
    } else {
      // no reaction, small visual
      bubbleCount = Math.min(8, total);
      intensity = 0.15;
    }

    // animate liquid
    liquid.style.transition = 'height 900ms ease, background 700ms linear';
    liquid.style.height = height + '%';
    liquid.style.background = color;

    // bubbles
    if(bubbleCount>0){
      createBubbles(bubbleCount, 'rgba(255,255,255,0.9)');
      // play several bubble sounds spaced out
      for(let i=0;i<3;i++){
        setTimeout(()=> playBubbleSound(intensity), i*120);
      }
    } else {
      clearBubbles();
    }

    result.innerHTML = message;
  }

  mixBtn.addEventListener('click', mixChemicals);

  // little helper: reset beaker on load
  window.addEventListener('load', ()=>{
    liquid.style.height = '8%';
    clearBubbles();
  });
});

/* bubble rise animation */
var styleEl = document.createElement('style');
styleEl.innerHTML = `
@keyframes rise {
  0% { transform: translateY(0) scale(0.8); opacity:0.9; }
  50% { opacity:0.9; }
  100% { transform: translateY(-220px) scale(1.2); opacity:0; }
}
.bubble { will-change: transform, opacity; }
`;
document.head.appendChild(styleEl);

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
