const o=document.getElementById("claro"),t=document.getElementById("oscuro");document.getElementById("dia");document.getElementById("noche");o.style.display="none";const l=document.getElementById("fondo"),c=document.querySelectorAll("a"),n=document.querySelectorAll("h1,h2,h3"),d=document.getElementById("caja"),r=document.querySelectorAll("p");o.addEventListener("click",()=>{o.style.display="none",t.style.display="flex",l.style.backgroundColor="",c.forEach(e=>{e.style.color="black"}),n.forEach(e=>{e.style.color="black"}),r.forEach(e=>{e.style.color="black"}),d.style.backgroundColor="white"});t.addEventListener("click",()=>{t.style.display="none",o.style.display="flex",l.style.backgroundColor="#6d8582",l.style.boxShadow="1px 2px 10px white",c.forEach(e=>{e.style.color="white"}),n.forEach(e=>{e.style.color="white"}),r.forEach(e=>{e.style.color="white"}),d.style.backgroundColor="#1A202C"});
