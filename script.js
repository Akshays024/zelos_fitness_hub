/* PARTICLES */
for(let i=0;i<40;i++){
  const p=document.createElement("div");
  p.className="particle";
  p.style.left=Math.random()*100+"vw";
  p.style.animationDuration=6+Math.random()*6+"s";
  document.getElementById("particles").appendChild(p);
}

/* SECTION REVEAL */
const secs=document.querySelectorAll("section");
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add("show");
  });
},{threshold:0.12});
secs.forEach(s=>obs.observe(s));

/* PARALLAX */
window.addEventListener("scroll",()=>{
  document.querySelector(".hero").style.backgroundPosition =
  `center ${window.scrollY*0.3}px`;
});

/* THEME */
function toggleTheme(){
  document.body.classList.toggle("light");
}

/* WHATSAPP */
function openWA(){
  window.open("https://wa.me/919999999999","_blank");
}
