const notes=["♪","♫","♩","♬","♭"];
const bg=document.querySelector(".background-notes");

for(let i=0;i<20;i++){
 const n=document.createElement("div");
 n.className="note";
 n.textContent=notes[Math.floor(Math.random()*notes.length)];
 n.style.left=Math.random()*100+"vw";
 n.style.top=Math.random()*100+"vh";
 n.style.fontSize=(18+Math.random()*28)+"px";
 n.style.animationDuration=(10+Math.random()*12)+"s";
 n.style.animationDelay=(-Math.random()*20)+"s";
 bg.appendChild(n);
}
