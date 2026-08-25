const notes=["♪","♫","♩","♬","♭"];
const bg=document.querySelector(".background-notes");
for(let i=0;i<20;i++){
  const note=document.createElement("div");
  note.className="note";
  note.textContent=notes[Math.floor(Math.random()*notes.length)];
  note.style.left=Math.random()*100+"vw";
  note.style.top=Math.random()*100+"vh";
  note.style.fontSize=(18+Math.random()*28)+"px";
  note.style.animationDuration=(10+Math.random()*12)+"s";
  note.style.animationDelay=(-Math.random()*20)+"s";
  bg.appendChild(note);
}
